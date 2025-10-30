import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';

const ContactSection = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [subscribeSubmitting, setSubscribeSubmitting] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitting(true);

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setContactSubmitting(false);
      setContactSuccess(true);
      setContactForm({ name: '', email: '', company: '', message: '' });
      setTimeout(() => setContactSuccess(false), 5000);
    }, 1500);
  };

  const handleSubscribeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribeSubmitting(true);

    // Simulate subscription (replace with Mailchimp/Formspree integration)
    setTimeout(() => {
      setSubscribeSubmitting(false);
      setSubscribeSuccess(true);
      setSubscribeEmail('');
      setTimeout(() => setSubscribeSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-primary text-center mb-12">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-heading font-semibold text-brand-primary mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <Mail className="text-brand-accent mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-brand-primary">Email</p>
                  <a
                    href="mailto:info@agricarbonx.com"
                    className="text-gray-600 hover:text-brand-accent transition-colors"
                  >
                    info@agricarbonx.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="text-brand-accent mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-brand-primary">Phone</p>
                  <a
                    href="tel:+919880973453"
                    className="text-gray-600 hover:text-brand-accent transition-colors"
                  >
                    +91-9880973453
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="text-brand-accent mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-brand-primary">Headquarters</p>
                  <p className="text-gray-600">
                    AgriCarbonX (HQ)<br />
                    Prestige Tech Park, Whitefield<br />
                    Bengaluru, Karnataka 560066<br />
                    India
                  </p>
                </div>
              </div>
            </div>

            {/* Stay Connected */}
            <div className="glass-dark p-6 rounded-xl">
              <h4 className="text-xl font-heading font-semibold text-white mb-4">
                Stay Connected
              </h4>
              <form onSubmit={handleSubscribeSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={subscribeEmail}
                    onChange={(e) => setSubscribeEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand-accent transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  disabled={subscribeSubmitting}
                  className="w-full px-6 py-3 bg-brand-accent text-brand-primary font-semibold rounded-lg hover:bg-brand-accent/90 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {subscribeSubmitting ? (
                    <Loader2 className="animate-spin" size={20} />
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Subscribe</span>
                    </>
                  )}
                </button>
                {subscribeSuccess && (
                  <p className="text-brand-accent text-sm text-center">
                    Successfully subscribed!
                  </p>
                )}
              </form>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-heading font-semibold text-brand-primary mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/agricarbonx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-brand-accent transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com/agricarbonx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-brand-accent transition-colors"
                >
                  X/Twitter
                </a>
                <a
                  href="https://www.instagram.com/agricarbonx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-brand-accent transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://www.youtube.com/@agricarbonx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-brand-accent transition-colors"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-heading font-semibold text-brand-primary mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-accent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-accent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  value={contactForm.company}
                  onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-accent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-accent transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={contactSubmitting}
                className="w-full px-6 py-4 bg-brand-accent text-brand-primary font-semibold rounded-lg neon-glow hover:bg-brand-accent/90 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {contactSubmitting ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {contactSuccess && (
                <p className="text-green-600 text-center font-medium">
                  Message sent successfully! We'll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
