import { useState, useEffect } from 'react';
import { Calendar, Clock, Users } from 'lucide-react';

// Declare Calendly on window
declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

type CalendlyType = 'intro' | 'strategy' | 'partnership';

const CalendlySection = () => {
  const [activeTab, setActiveTab] = useState<CalendlyType>('intro');
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);
  const [usePopup, setUsePopup] = useState(false);

  const calendlyUrls = {
    intro: 'https://calendly.com/agricarbonx/30min?hide_event_type_details=1&hide_gdpr_banner=1',
    strategy: 'https://calendly.com/agricarbonx/carbon-credit-strategy-consultation?hide_event_type_details=1&hide_gdpr_banner=1',
    partnership: 'https://calendly.com/agricarbonx/strategic-partnership-discussion?hide_event_type_details=1&hide_gdpr_banner=1',
  };

  const tabs = [
    {
      id: 'intro' as CalendlyType,
      icon: <Clock size={20} />,
      title: 'Intro Call',
      description: '30-minute discovery call',
    },
    {
      id: 'strategy' as CalendlyType,
      icon: <Calendar size={20} />,
      title: 'Carbon Strategy',
      description: 'Deep-dive consultation',
    },
    {
      id: 'partnership' as CalendlyType,
      icon: <Users size={20} />,
      title: 'Partnership',
      description: 'Strategic collaboration',
    },
  ];

  useEffect(() => {
    // Load Calendly script once globally
    if (!document.querySelector('script[src*="calendly"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => {
        setIsCalendlyLoaded(true);
        // Check if we're on HTTPS (production) or localhost
        if (window.location.protocol === 'http:' && window.location.hostname === 'localhost') {
          setUsePopup(true);
        }
      };
      document.body.appendChild(script);

      // Load Calendly CSS
      const link = document.createElement('link');
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    } else {
      setIsCalendlyLoaded(true);
      if (window.location.protocol === 'http:' && window.location.hostname === 'localhost') {
        setUsePopup(true);
      }
    }
  }, []);

  useEffect(() => {
    if (isCalendlyLoaded && window.Calendly && !usePopup) {
      // Initialize inline widgets for all tabs (keeping them mounted)
      Object.keys(calendlyUrls).forEach((type) => {
        const container = document.getElementById(`calendly-${type}`);
        if (container && container.children.length === 0) {
          try {
            window.Calendly.initInlineWidget({
              url: calendlyUrls[type as CalendlyType],
              parentElement: container,
            });
          } catch (error) {
            console.error(`Failed to initialize Calendly for ${type}:`, error);
            setUsePopup(true);
          }
        }
      });
    }
  }, [isCalendlyLoaded, usePopup]);

  const handlePopupClick = (type: CalendlyType) => {
    if (window.Calendly && usePopup) {
      window.Calendly.initPopupWidget({ url: calendlyUrls[type] });
    }
  };

  return (
    <section id="calendly" className="py-20 bg-gradient-to-br from-brand-primary to-brand-accent3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white text-center mb-4">
          Book a Call
        </h2>
        <p className="text-lg text-gray-200 text-center mb-12 max-w-3xl mx-auto">
          Choose a meeting type and schedule a time that works for you
        </p>

        {/* Tab Navigation */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                if (usePopup) {
                  handlePopupClick(tab.id);
                }
              }}
              className={`flex items-center space-x-3 px-6 py-4 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-brand-accent text-brand-primary neon-glow'
                  : 'glass text-white hover:bg-white/10'
              }`}
            >
              {tab.icon}
              <div className="text-left">
                <div className="font-semibold">{tab.title}</div>
                <div className="text-xs opacity-80">{tab.description}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Calendly Containers - All mounted, toggled with CSS */}
        {!usePopup ? (
          <div className="relative">
            {Object.keys(calendlyUrls).map((type) => (
              <div
                key={type}
                id={`calendly-${type}`}
                className={`calendly-inline-widget ${
                  activeTab === type ? 'visible' : 'hidden'
                }`}
              />
            ))}
          </div>
        ) : (
          <div className="glass p-12 rounded-xl text-center">
            <p className="text-white text-lg mb-6">
              Click the button above to open the scheduling widget
            </p>
            <button
              onClick={() => handlePopupClick(activeTab)}
              className="px-8 py-4 bg-brand-accent text-brand-primary font-semibold rounded-lg neon-glow hover:bg-brand-accent/90 transition-all duration-300"
            >
              Open Calendly Widget
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CalendlySection;
