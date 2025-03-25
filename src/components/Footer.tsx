import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

export default function Footer({ isDark }: { isDark: boolean }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-8 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0">
            © {currentYear} Portfolio. All rights reserved.
          </div>

          <div className="flex space-x-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className={`p-2 rounded-full ${isDark ? 'hover:bg-zinc-800' : 'hover:bg-zinc-100'}`}
            >
              <Mail className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className={`p-2 rounded-full ${isDark ? 'hover:bg-zinc-800' : 'hover:bg-zinc-100'}`}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className={`p-2 rounded-full ${isDark ? 'hover:bg-zinc-800' : 'hover:bg-zinc-100'}`}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className={`p-2 rounded-full ${isDark ? 'hover:bg-zinc-800' : 'hover:bg-zinc-100'}`}
            >
              <Twitter className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}