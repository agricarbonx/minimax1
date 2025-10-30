import { ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Impact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const workflow = [
    { step: 'Farm', description: 'Enroll regenerative farms' },
    { step: 'Measure', description: 'Satellite + field sampling' },
    { step: 'Verify', description: 'Audits & modelling' },
    { step: 'Tokenize', description: 'Blockchain credits' },
    { step: 'List/Trade', description: 'Marketplaces & offtake' },
  ];

  return (
    <section id="impact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-primary text-center mb-4">
          Impact & Workflow
        </h2>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          From farm to market: Our end-to-end carbon credit lifecycle
        </p>

        <div
          ref={ref}
          className={`transform transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            {workflow.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="glass-dark p-6 rounded-xl min-w-[200px] text-center transform transition-all duration-300 hover:scale-105">
                  <div className="text-3xl font-heading font-bold text-brand-accent mb-2">
                    {item.step}
                  </div>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>
                {index < workflow.length - 1 && (
                  <ArrowRight
                    className="text-brand-accent2 mx-2 hidden md:block flex-shrink-0"
                    size={32}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
