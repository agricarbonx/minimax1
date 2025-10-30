import { CheckCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Mission = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const bullets = [
    'Verify and tokenize soil carbon with scientific rigor.',
    'Deliver transparent carbon credits to corporate buyers.',
    'Increase farmer incomes through regenerative ag practices.',
  ];

  return (
    <section
      id="mission"
      ref={ref}
      className="py-20 bg-gradient-to-br from-brand-primary to-brand-accent3"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transform transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white text-center mb-8">
            Our Mission
          </h2>

          <div className="glass p-8 md:p-12 rounded-2xl">
            <p className="text-lg md:text-xl text-white leading-relaxed mb-8">
              AgriCarbonX converts verified soil carbon into high-integrity, tradable credits
              while empowering farmers with regenerative income. We combine AI, remote sensing
              and field verification to deliver transparent carbon accounting and
              enterprise-grade reporting.
            </p>

            <div className="space-y-4">
              {bullets.map((bullet, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 transform transition-all duration-500"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="text-brand-accent flex-shrink-0 mt-1" size={24} />
                  <p className="text-base md:text-lg text-gray-200">{bullet}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
