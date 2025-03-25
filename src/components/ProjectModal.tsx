import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    image: string;
    tech: string[];
    longDescription: string;
    challenges: string[];
    solutions: string[];
  };
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}

export default function ProjectModal({ project, isOpen, onClose, isDark }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
        >
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          
          <motion.div
            className={`relative w-full max-w-4xl ${isDark ? 'bg-black' : 'bg-white'} rounded-lg shadow-xl overflow-hidden`}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <button
              onClick={onClose}
              className={`absolute top-4 right-4 p-2 rounded-full ${
                isDark ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'
              }`}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-64 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                {project.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm ${
                      isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {project.longDescription}
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                    Challenges
                  </h4>
                  <ul className={`list-disc list-inside ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                    Solutions
                  </h4>
                  <ul className={`list-disc list-inside ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.solutions.map((solution, index) => (
                      <li key={index}>{solution}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}