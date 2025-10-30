import { useInView } from 'react-intersection-observer';
import { CheckCircle } from 'lucide-react';

interface Partner {
  name: string;
  description: string;
  status: string;
}

const Partners = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const partners: Partner[] = [
    {
      name: 'En-Cure Farms',
      description: 'Field trials & implementation',
      status: 'Active partner — pilot sites',
    },
    {
      name: 'Hasiru Mitra',
      description: 'Community engagement & farmer mobilization',
      status: 'Active partner',
    },
    {
      name: 'AgriVentures India',
      description: 'Aggregation & supply chain integration',
      status: 'Active partner',
    },
  ];

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-primary text-center mb-6">
          Strategic Partners
        </h2>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-base md:text-lg text-gray-600 text-center leading-relaxed">
            Trusted operational and community partners enable our pilots and field scale-up.
            Logos shown where permissions are confirmed; otherwise text cards are displayed.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`glass-dark p-8 rounded-xl transform transition-all duration-700 hover:scale-105 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start space-x-3 mb-4">
                <CheckCircle className="text-brand-accent flex-shrink-0 mt-1" size={24} />
                <h3 className="text-xl font-heading font-semibold text-white">
                  {partner.name}
                </h3>
              </div>
              <p className="text-gray-300 mb-3">{partner.description}</p>
              <span className="inline-block px-3 py-1 text-xs font-medium bg-green-500/20 text-green-300 border border-green-500/50 rounded-full">
                {partner.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
