const Footer = () => {
  return (
    <footer className="bg-brand-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-brand-accent mb-4">
              AgriCarbonX
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Building the future of carbon, soil and sustainability through AI, remote
              sensing and blockchain technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#mission"
                  className="text-gray-300 hover:text-brand-accent transition-colors text-sm"
                >
                  Mission
                </a>
              </li>
              <li>
                <a
                  href="#tech"
                  className="text-gray-300 hover:text-brand-accent transition-colors text-sm"
                >
                  Technology
                </a>
              </li>
              <li>
                <a
                  href="#certifications"
                  className="text-gray-300 hover:text-brand-accent transition-colors text-sm"
                >
                  Certifications
                </a>
              </li>
              <li>
                <a
                  href="#partners"
                  className="text-gray-300 hover:text-brand-accent transition-colors text-sm"
                >
                  Partners
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a
                  href="mailto:info@agricarbonx.com"
                  className="hover:text-brand-accent transition-colors"
                >
                  info@agricarbonx.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919880973453"
                  className="hover:text-brand-accent transition-colors"
                >
                  +91-9880973453
                </a>
              </li>
              <li className="text-gray-300">
                Prestige Tech Park, Whitefield<br />
                Bengaluru, Karnataka 560066, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} AgriCarbonX. All rights reserved.
          </p>
          <p className="mt-2">
            Committed to transparency, scientific rigor, and regenerative agriculture.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
