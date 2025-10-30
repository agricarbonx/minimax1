import { useInView } from 'react-intersection-observer';
import { FileText } from 'lucide-react';

interface Certification {
  name: string;
  status: string;
  statusType: 'pursuing' | 'application' | 'pilot' | 'active' | 'pending';
}

const Certifications = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const certifications: Certification[] = [
    { name: 'Verra (VCS)', status: 'Pursuing / Application in progress', statusType: 'application' },
    { name: 'Gold Standard', status: 'Pursuing / Alignment reviewed', statusType: 'pursuing' },
    { name: 'ISO 14064-1 (GHG accounting)', status: 'Alignment in progress', statusType: 'pursuing' },
    { name: 'ISO 14001 (Environmental Management)', status: 'Policy & processes aligning', statusType: 'pursuing' },
    { name: 'PAS 2060 (Carbon neutrality)', status: 'Targeted', statusType: 'pursuing' },
  ];

  const getStatusColor = (statusType: string) => {
    switch (statusType) {
      case 'active':
        return 'bg-green-500/20 text-green-300 border-green-500/50';
      case 'application':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/50';
      case 'pilot':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/50';
      case 'pursuing':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/50';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/50';
    }
  };

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-brand-primary to-brand-accent3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white text-center mb-6">
          Global Certifications
        </h2>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="glass p-6 rounded-xl">
            <p className="text-sm md:text-base text-gray-200 leading-relaxed">
              AgriCarbonX actively aligns our methodologies and projects with internationally
              recognized carbon standards. The logos below indicate standards we are currently
              pursuing, piloting, or aligning with. We do not represent any award of
              certification until supporting audit reports or certificates are uploaded.
              Contact us for verification documents.
            </p>
          </div>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`glass p-6 rounded-xl transform transition-all duration-700 hover:scale-105 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-heading font-semibold text-white">
                  {cert.name}
                </h3>
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(
                    cert.statusType
                  )}`}
                >
                  {cert.statusType.charAt(0).toUpperCase() + cert.statusType.slice(1)}
                </span>
              </div>
              <p className="text-sm text-gray-300 mb-4">{cert.status}</p>
              <button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-sm text-brand-accent hover:text-brand-accent2 transition-colors flex items-center space-x-2"
              >
                <FileText size={16} />
                <span>Request supporting docs</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
