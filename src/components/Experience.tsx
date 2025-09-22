import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Calendar, MapPin, Building } from 'lucide-react';

interface TimelineItem {
  type: 'work' | 'education';
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
}

const timeline: TimelineItem[] = [
  {
    type: 'work',
    title: ' DevOps Engineer',
    organization: 'WalrusIt',
    location: 'USA',
    period: 'Mar 2025- Aug 2025',
    description: [
      'Led cloud migration initiatives for enterprise clients',
      'Implemented CI/CD pipelines reducing deployment time by 70%',
      'Managed Kubernetes clusters across multiple cloud providers'
    ]
  },
  {
    type: 'work',
    title: 'DevOps Engineer',
    organization: 'DevSecOps Software Pvt Ltd',
    location: 'Greater Noida, India',
    period: 'Mar 2024 - Feb 2025',
    description: [
      'Designed and maintained AWS infrastructure for high-traffic applications',
      'Automated infrastructure deployment using Terraform',
      'Implemented monitoring and alerting systems'
    ]
  },

  {
    type: 'work',
    title: 'DevOps Engineer Intern',
    organization: 'DevSecOps Software Pvt Ltd',
    location: 'Austin, TX',
    period: 'Sep 2023 - Feb 2024',
    description: [
      'Built and maintained microservices architecture',
      'Implemented container orchestration solutions',
      'Developed automated testing frameworks'
    ]
  },

  {
    type: 'education',
    title: 'Compute Science',
    organization: 'Future group of institutions',
    location: 'Braeilly, Uttar Pradesh',
    period: '2019 - 2023',
    description: [
      'Specialized in Distributed Systems',
      'Research focus on Cloud Computing',
      'Teaching Assistant for DevOps Practices course'
    ]
  },
  {
    type: 'education',
    title: 'B.S. Computer Engineering',
    organization: 'MIT',
    location: 'Cambridge, MA',
    period: '2012 - 2016',
    description: [
      'Focus on Software Systems',
      'Senior thesis on Automated Deployment Systems',
      'Dean\'s List all semesters'
    ]
  }
];

export default function Experience({ isDark }: { isDark: boolean }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className={`py-20 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`} id="experience">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Experience & Education</h2>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-start mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Timeline line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-400 to-transparent" />

                {/* Timeline dot */}
                <div className={`absolute left-8 md:left-1/2 -ml-3 w-6 h-6 rounded-full ${isDark ? 'bg-white' : 'bg-black'
                  } flex items-center justify-center`}>
                  {item.type === 'work' ? (
                    <Briefcase className={`w-3 h-3 ${isDark ? 'text-black' : 'text-white'}`} />
                  ) : (
                    <GraduationCap className={`w-3 h-3 ${isDark ? 'text-black' : 'text-white'}`} />
                  )}
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                  <motion.div
                    className={`p-6 rounded-lg ${isDark ? 'bg-gray-900' : 'bg-gray-100'
                      }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <div className="flex items-center mb-2">
                      <Building className="w-4 h-4 mr-2" />
                      <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                        {item.organization}
                      </span>
                    </div>
                    <div className="flex items-center mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                        {item.location}
                      </span>
                    </div>
                    <div className="flex items-center mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                        {item.period}
                      </span>
                    </div>
                    <ul className={`list-disc list-inside ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {item.description.map((desc, i) => (
                        <li key={i} className="mb-1">{desc}</li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}