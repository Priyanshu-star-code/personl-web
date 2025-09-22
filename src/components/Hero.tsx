import { motion } from 'framer-motion';
import { Terminal, Cloud, Settings } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import GlitchText from './GlitchText';

export default function Hero({ isDark }: { isDark: boolean }) {
  return (
    <section className={`min-h-screen flex items-center justify-center relative overflow-hidden pt-16 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className={`absolute inset-0 ${isDark ? 'bg-black' : 'bg-white'}`}></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <GlitchText
            text="Priyanshu Verma "
            className="text-5xl md:text-7xl font-bold mb-6"
          />
          <div className="text-3xl md:text-5xl mt-2 mb-4">
            <Typewriter
              options={{
                strings: [
                  'DevOps Engineer',
                  'Cloud Architect',
                  'Infrastructure Specialist',
                  'Automation Expert'
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </div>

          <motion.p
            className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-8 max-w-2xl mx-auto`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            With over 2 years of experience in cloud architecture and DevOps, I specialize in building scalable infrastructure and automating deployment pipelines. Passionate about containerization, microservices, and cloud-native technologies.
          </motion.p>

          <motion.div
            className="flex justify-center gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              className="flex flex-col items-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Terminal className={`w-12 h-12 ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-2`} />
              <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>DevOps</span>
            </motion.div>
            <motion.div
              className="flex flex-col items-center"
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <Cloud className={`w-12 h-12 ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-2`} />
              <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Cloud</span>
            </motion.div>
            <motion.div
              className="flex flex-col items-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Settings className={`w-12 h-12 ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-2`} />
              <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Automation</span>
            </motion.div>
          </motion.div>

          <motion.button
            className={`px-8 py-3 ${isDark ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'} font-medium rounded-full transition-colors relative overflow-hidden group`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity" />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}