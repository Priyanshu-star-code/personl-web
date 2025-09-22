import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About({ isDark }: { isDark: boolean }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section
      id="about"
      className={`py-20 relative overflow-hidden ${isDark ? 'bg-black text-white' : 'bg-white text-black'
        }`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Professional headshot"
                className="rounded-lg shadow-xl"
              />
            </div>

            <div>
              <p className={`text-lg mb-6 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                With a passion for DevOps, automation, and scalable cloud solutions, I bring
                hands-on expertise to every project.
              </p>

              <p className={`text-lg mb-6 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                My expertise spans across AWS, Azure, and GCP, with a strong focus on
                containerization, CI/CD pipelines, and infrastructure as code.
              </p>

              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2 rounded-full transition-colors ${isDark
                    ? 'bg-white text-black hover:bg-gray-200'
                    : 'bg-black text-white hover:bg-gray-800'
                    }`}
                >
                  Download CV
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2 border-2 rounded-full transition-colors ${isDark
                    ? 'border-white text-white hover:bg-white hover:text-black'
                    : 'border-black text-black hover:bg-black hover:text-white'
                    }`}
                >
                  Contact Me
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
