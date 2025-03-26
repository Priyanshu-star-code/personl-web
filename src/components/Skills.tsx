import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Cloud, Server, Code, Database, Settings, Lock } from "lucide-react";

const skills = [
  {
    category: "Cloud Platforms",
    icon: Cloud,
    items: ["AWS", "Azure", "GCP", "OpenStack"],
    description: {
      "AWS": "Amazon Web Services (AWS) is a comprehensive cloud computing platform providing services like computing power, storage, and databases.",
      "Azure": "Microsoft Azure is a cloud platform offering various services for computing, AI, databases, and networking.",
      "GCP": "Google Cloud Platform (GCP) provides infrastructure, machine learning, and cloud services for businesses.",
      "OpenStack": "OpenStack is an open-source cloud computing platform that enables organizations to deploy and manage cloud services."
    }
  },
  {
    category: "Infrastructure",
    icon: Server,
    items: ["Terraform", "CloudFormation", "Kubernetes", "Docker"]
  },
  {
    category: "Programming",
    icon: Code,
    items: ["Python", "Go", "JavaScript", "Bash"]
  },
  {
    category: "Databases",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"]
  },
  {
    category: "Automation",
    icon: Settings,
    items: ["Jenkins", "GitLab CI", "Ansible", "Chef"]
  },
  {
    category: "Security",
    icon: Lock,
    items: ["IAM", "SSL/TLS", "VPNs", "Firewalls"]
  }
];

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <section className="py-20 bg-black text-white" id="skills">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(255, 255, 255, 0.2)" }}
                  className="p-6 bg-opacity-10 bg-white backdrop-blur-lg rounded-xl transition-transform hover:shadow-2xl border border-gray-700 cursor-pointer"
                  onClick={() => setSelectedSkill(skill)}
                >
                  <div className="flex items-center mb-4">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.2 }}
                      className="p-3 bg-gray-800 rounded-full"
                    >
                      <Icon className="w-8 h-8 text-blue-400" />
                    </motion.div>
                    <h3 className="text-xl font-semibold ml-4">{skill.category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="px-3 py-1 bg-gray-700 text-white rounded-full text-sm hover:bg-blue-400 hover:text-black transition"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedSkill({ category: skill.category, name: item, description: skill.description?.[item] || "No description available." });
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
      
      {selectedSkill && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white text-black p-6 rounded-lg max-w-md">
            <h3 className="text-2xl font-bold mb-4">{selectedSkill.name}</h3>
            <p className="text-gray-700">{selectedSkill.description}</p>
            <button 
              onClick={() => setSelectedSkill(null)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
