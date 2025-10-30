import { Brain, Satellite, Link, BarChart3, Award, Building2 } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface TechCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TechGrid = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const techCards: TechCard[] = [
    {
      icon: <Brain size={48} className="text-brand-accent" />,
      title: 'Carbon Accounting AI',
      description:
        'Automated GHG measurement, modeling & reporting for soil carbon.',
    },
    {
      icon: <Satellite size={48} className="text-brand-accent2" />,
      title: 'Soil Analysis & Remote Sensing',
      description:
        'Satellite & field sampling fused for high-resolution soil carbon maps.',
    },
    {
      icon: <Link size={48} className="text-brand-accent3" />,
      title: 'Blockchain Traceability',
      description:
        'Immutable lifecycle recording and NFT-based ownership for credits.',
    },
    {
      icon: <BarChart3 size={48} className="text-brand-accent" />,
      title: 'Carbon Market Dashboard',
      description:
        'Portfolio, trade and analytics for buyers and projects.',
    },
    {
      icon: <Award size={48} className="text-brand-accent2" />,
      title: 'Certification Tracker',
      description:
        'Track application status, supporting evidence and audit timelines.',
    },
    {
      icon: <Building2 size={48} className="text-brand-accent3" />,
      title: 'Corporate Offtake Portal',
      description:
        'Build offtake agreements, manage deliveries and reporting.',
    },
  ];

  return (
    <section id="tech" className="py-20 bg-brand-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-primary text-center mb-4">
          Technology & Tools
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Comprehensive carbon intelligence powered by cutting-edge technology
        </p>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {techCards.map((card, index) => (
            <div
              key={index}
              className={`glass-dark p-8 rounded-xl transform transition-all duration-700 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-6 flex justify-center">{card.icon}</div>
              <h3 className="text-xl font-heading font-semibold text-white mb-3 text-center">
                {card.title}
              </h3>
              <p className="text-gray-300 text-center leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechGrid;
