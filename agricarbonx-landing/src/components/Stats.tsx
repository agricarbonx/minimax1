import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface Stat {
  value: number;
  label: string;
  suffix: string;
}

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats: Stat[] = [
    { value: 1250000, label: 'CO₂ Captured', suffix: ' tCO₂e' },
    { value: 850, label: 'Farms Onboarded', suffix: '' },
    { value: 420000, label: 'Carbon Credits Issued', suffix: '' },
    { value: 50, label: 'Partners & Pilots', suffix: '' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary text-center mb-4">
          Real outcomes. Measured.
        </h2>
        
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
        >
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} inView={inView} />
          ))}
        </div>

        <p className="text-sm text-gray-500 text-center mt-8 italic">
          Numbers shown reflect projects and pilots; documentation available on request.
        </p>
      </div>
    </section>
  );
};

interface StatCardProps {
  stat: Stat;
  inView: boolean;
}

const StatCard = ({ stat, inView }: StatCardProps) => {
  const [count, setCount] = useState(0);
  const countingRef = useRef(false);

  useEffect(() => {
    if (inView && !countingRef.current) {
      countingRef.current = true;
      const duration = 2000;
      const steps = 60;
      const stepValue = stat.value / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        if (currentStep <= steps) {
          setCount(Math.floor(stepValue * currentStep));
        } else {
          setCount(stat.value);
          clearInterval(timer);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [inView, stat.value]);

  const formatNumber = (num: number) => {
    return num.toLocaleString('en-US');
  };

  return (
    <div className="glass-dark p-6 rounded-xl text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="text-4xl md:text-5xl font-heading font-bold text-brand-accent mb-2">
        {formatNumber(count)}
        <span className="text-2xl">{stat.suffix}</span>
      </div>
      <div className="text-sm md:text-base text-gray-300 font-medium">{stat.label}</div>
    </div>
  );
};

export default Stats;
