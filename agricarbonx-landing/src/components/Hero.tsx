import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  const taglines = [
    'Carbon Accounting',
    'Soil Intelligence',
    'Blockchain Traceability',
    'Market Access',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-primary via-brand-primary to-brand-accent3"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-accent3/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
          Building the future of <br />
          <span className="text-brand-accent">carbon, soil and sustainability.</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
          AI + remote sensing + blockchain to measure, verify and tokenize soil carbon —
          enabling high-integrity credits, farmer income and enterprise-grade reporting.
        </p>

        {/* Rotating tagline */}
        <div className="h-12 mb-12">
          <p className="text-xl md:text-2xl font-medium text-brand-accent2 transition-opacity duration-500">
            {taglines[currentTagline]}
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-brand-accent text-brand-primary font-semibold rounded-lg neon-glow hover:bg-brand-accent/90 transition-all duration-300 transform hover:scale-105"
          >
            Request Demo
          </button>
          <button
            onClick={() => scrollToSection('tech')}
            className="px-8 py-4 glass text-white font-semibold rounded-lg border-2 border-brand-accent hover:bg-brand-accent/10 transition-all duration-300"
          >
            Explore Our Tech
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-brand-accent" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
