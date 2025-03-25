import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import ProjectModal from './ProjectModal';

const projects = [
  {
    title: "Cloud Migration Platform",
    description: "Enterprise-scale cloud migration tool with automated assessment and planning capabilities.",
    longDescription: "A comprehensive platform that streamlines the process of migrating enterprise applications to the cloud. The platform includes automated assessment tools, cost estimation, and detailed migration planning features.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    tech: ["AWS", "Terraform", "Python", "React"],
    github: "#",
    live: "#",
    challenges: [
      "Complex legacy system integration",
      "Data migration security",
      "Minimal downtime requirements"
    ],
    solutions: [
      "Implemented automated discovery and assessment tools",
      "Developed secure data transfer protocols",
      "Created phased migration strategy"
    ]
  },
  {
    title: "DevOps Dashboard",
    description: "Real-time monitoring and analytics platform for CI/CD pipelines and cloud resources.",
    longDescription: "A centralized dashboard providing real-time insights into CI/CD pipelines, cloud resource utilization, and deployment metrics. Features include customizable alerts and detailed analytics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    tech: ["Docker", "Kubernetes", "Grafana", "Node.js"],
    github: "#",
    live: "#",
    challenges: [
      "Real-time data processing",
      "Multiple data source integration",
      "Scalability concerns"
    ],
    solutions: [
      "Implemented event-driven architecture",
      "Created unified data pipeline",
      "Used containerization for scalability"
    ]
  },
  {
    title: "Infrastructure Automation Suite",
    description: "Comprehensive toolkit for automating infrastructure deployment and management.",
    longDescription: "An automation suite that handles infrastructure provisioning, configuration management, and deployment orchestration. Includes self-healing capabilities and disaster recovery automation.",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    tech: ["Ansible", "Jenkins", "Go", "PostgreSQL"],
    github: "#",
    live: "#",
    challenges: [
      "Complex dependency management",
      "Cross-platform compatibility",
      "Configuration drift"
    ],
    solutions: [
      "Implemented dependency resolution system",
      "Created platform-agnostic abstractions",
      "Developed configuration validation tools"
    ]
  }
];

export default function Projects({ isDark }: { isDark: boolean }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section className={`py-20 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`} id="projects">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`rounded-xl overflow-hidden cursor-pointer transform transition-transform hover:scale-105 ${
                  isDark ? 'bg-gray-900' : 'bg-gray-100'
                }`}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative group">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity ${
                    isDark ? 'bg-black bg-opacity-50' : 'bg-white bg-opacity-50'
                  }`}>
                    <a href={project.github} className={`p-2 rounded-full ${
                      isDark ? 'bg-white text-black' : 'bg-black text-white'
                    } hover:scale-110 transition-transform`}>
                      <Github className="w-6 h-6" />
                    </a>
                    <a href={project.live} className={`p-2 rounded-full ${
                      isDark ? 'bg-white text-black' : 'bg-black text-white'
                    } hover:scale-110 transition-transform`}>
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className={`px-3 py-1 text-sm rounded-full ${
                          isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <ProjectModal
        project={selectedProject!}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        isDark={isDark}
      />
    </section>
  );
}