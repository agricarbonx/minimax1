import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Mission from './components/Mission';
import TechGrid from './components/TechGrid';
import Impact from './components/Impact';
import Certifications from './components/Certifications';
import Partners from './components/Partners';
import CalendlySection from './components/CalendlySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Add JSON-LD structured data for SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "AgriCarbonX",
      "description": "AgriCarbonX uses AI, remote sensing and blockchain to verify and tokenize soil carbon projects — providing high-integrity carbon credits, farmer income and enterprise-grade reporting.",
      "url": "https://agricarbonx.com",
      "logo": "https://agricarbonx.com/logo.png",
      "email": "info@agricarbonx.com",
      "telephone": "+91-9880973453",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Prestige Tech Park, Whitefield",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560066",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.linkedin.com/company/agricarbonx",
        "https://twitter.com/agricarbonx",
        "https://www.instagram.com/agricarbonx",
        "https://www.youtube.com/@agricarbonx"
      ]
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-brand-background">
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <Mission />
        <TechGrid />
        <Impact />
        <Certifications />
        <Partners />
        <CalendlySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
