
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Smart Home IoT Dashboard",
    description: "A comprehensive IoT dashboard for monitoring and controlling smart home devices with real-time data visualization and mobile responsiveness.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Arduino"],
    link: "#",
    featured: true
  },
  {
    id: 2,
    title: "AI-Powered Study Assistant",
    description: "Mobile application that uses machine learning to create personalized study plans and track learning progress for students.",
    technologies: ["React Native", "Python", "TensorFlow", "Firebase"],
    link: "#"
  },
  {
    id: 3,
    title: "Blockchain Voting System",
    description: "Decentralized voting platform ensuring transparency and security using blockchain technology with a modern web interface.",
    technologies: ["Solidity", "Web3.js", "React", "Ethereum"],
    link: "#"
  },
  {
    id: 4,
    title: "Real-time Collaboration Tool",
    description: "Web-based collaborative platform with live document editing, video calls, and project management features for remote teams.",
    technologies: ["Vue.js", "WebRTC", "Socket.io", "PostgreSQL"],
    link: "#"
  },
  {
    id: 5,
    title: "E-commerce Analytics Platform",
    description: "Comprehensive analytics dashboard for e-commerce businesses with advanced reporting and predictive insights.",
    technologies: ["Angular", "D3.js", "Python", "Django", "Redis"],
    link: "#"
  },
  {
    id: 6,
    title: "Voice-Controlled Home Assistant",
    description: "Custom voice assistant built with speech recognition and natural language processing for smart home control.",
    technologies: ["Python", "TensorFlow", "Raspberry Pi", "Speech API"],
    link: "#"
  }
];

const ProjectsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 relative" id="projects">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A showcase of my technical projects spanning web development, mobile apps, 
            IoT systems, and emerging technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`glass-effect rounded-2xl p-6 group hover:scale-105 transition-all duration-300 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="bg-gradient-to-r from-violet-600 to-purple-600 text-white text-xs px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-violet-500/20 text-violet-300 text-sm px-3 py-1 rounded-full border border-violet-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button
                  variant="ghost"
                  className="w-full justify-between text-violet-400 hover:text-white hover:bg-violet-500/20 group"
                >
                  View Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
