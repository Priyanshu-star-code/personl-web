import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

export default function Contact({ isDark }: { isDark: boolean }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section
      id="contact"
      className={`py-20 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Section */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p
                className={`mb-6 ${isDark ? 'text-zinc-400' : 'text-gray-600'
                  }`}
              >
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, I'll try my best
                to get back to you!
              </p>

              <div className="flex gap-4 mb-8">
                {[
                  { icon: Mail, link: '#' },
                  { icon: Linkedin, link: '#' },
                  { icon: Github, link: '#' },
                  { icon: Twitter, link: '#' }
                ].map(({ icon: Icon, link }, idx) => (
                  <a
                    key={idx}
                    href={link}
                    className={`p-2 rounded-full transition-colors ${isDark
                      ? 'bg-zinc-800 hover:bg-zinc-700'
                      : 'bg-gray-200 hover:bg-gray-300'
                      }`}
                  >
                    <Icon
                      className={`w-6 h-6 ${isDark ? 'text-white' : 'text-black'
                        }`}
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Section (Form) */}
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium mb-1 ${isDark ? 'text-zinc-400' : 'text-gray-600'
                    }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${isDark
                    ? 'bg-zinc-900 text-white focus:ring-white'
                    : 'bg-gray-100 text-black focus:ring-black'
                    }`}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium mb-1 ${isDark ? 'text-zinc-400' : 'text-gray-600'
                    }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${isDark
                    ? 'bg-zinc-900 text-white focus:ring-white'
                    : 'bg-gray-100 text-black focus:ring-black'
                    }`}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-1 ${isDark ? 'text-zinc-400' : 'text-gray-600'
                    }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${isDark
                    ? 'bg-zinc-900 text-white focus:ring-white'
                    : 'bg-gray-100 text-black focus:ring-black'
                    }`}
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full px-8 py-3 font-medium rounded-lg transition-colors ${isDark
                  ? 'bg-white text-black hover:bg-gray-200'
                  : 'bg-black text-white hover:bg-gray-800'
                  }`}
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
