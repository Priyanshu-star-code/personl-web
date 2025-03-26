import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter, Users } from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer({ isDark }: { isDark: boolean }) {
  const currentYear = new Date().getFullYear();
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Simulate visitor count (Replace with actual API or localStorage logic)
    const storedCount = localStorage.getItem("visitorCount");
    const newCount = storedCount ? parseInt(storedCount) + 1 : 1;
    localStorage.setItem("visitorCount", newCount.toString());
    setVisitorCount(newCount);
  }, []);

  return (
    <footer className={`py-8 ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0">© {currentYear} Portfolio. All rights reserved.</div>

          {/* Visitor Counter */}
          <motion.div 
            className="flex items-center space-x-2 text-sm font-semibold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Users className="w-5 h-5" />
            <span>{visitorCount} Visitors</span>
          </motion.div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {[Mail, Linkedin, Github, Twitter].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.1 }}
                className={`p-2 rounded-full ${isDark ? "hover:bg-zinc-800" : "hover:bg-zinc-100"}`}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}