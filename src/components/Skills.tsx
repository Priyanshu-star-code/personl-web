import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cloud, Server, Code, Database, Settings, Lock } from 'lucide-react';

const skills = [
  {
    category: "Cloud Platforms",
    icon: Cloud,
    items: ["AWS", "Azure", "GCP", "OpenStack"]
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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-white" id="skills">
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
                  className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <Icon className="w-6 h-6 mr-2 text-gray-700" />
                    <h3 className="text-xl font-bold">{skill.category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
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
    </section>
  );
}