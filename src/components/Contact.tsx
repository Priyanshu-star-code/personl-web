import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-black text-white" id="contact">
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
            <div>
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="text-zinc-400 mb-6">
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, I'll try my best
                to get back to you!
              </p>
              
              <div className="flex gap-4 mb-8">
                <a href="#" className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
                <a href="#" className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-zinc-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-zinc-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-zinc-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-zinc-200 transition-colors"
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