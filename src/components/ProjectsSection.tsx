"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  type: "Research" | "Experience" | "Personal";
  technologies: string[];
  link: string;
  featured?: boolean;
  wip?: boolean;
  published?: boolean;
}

const projects: Project[] = [
  {
    id: 7,
    title: "Prompt Community for AI Image Generation",
    description:
      "Building a dynamic community platform enabling users to share and explore trending AI-generated image prompts. Features user uploads and interactive discussions to fuel creativity.",
    type: "Personal",
    technologies: ["Next.js", "Cloudinary", "Prisma", "Vercel"],
    link: "",
    wip: true,
  },
  {
    id: 6,
    title: "AI Recipe Generator from Ingredient Images",
    description:
      "Developed an intelligent recipe generator that processes photos of ingredients using OCR and advanced object detection models. Provides tailored recipe suggestions powered by Gemini SDK and machine learning.",
    type: "Personal",
    technologies: ["Gemini SDK", "YOLO", "OCR", "ML", "Python"],
    link: "",
    featured: true,
  },
  {
    id: 4,
    title: "Embedded ECG Visualization GUI",
    description:
      "Designed and implemented a real-time ECG data visualization GUI on STM32 hardware using Qt and embedded Linux, enabling efficient medical monitoring solutions.",
    type: "Experience",
    technologies: ["C++", "Qt", "STM32", "Embedded Linux"],
    link: "",
  },
  {
    id: 3,
    title: "OTT Platform Development",
    description:
      "Led the full-stack development of a scalable OTT streaming platform with an integrated admin panel, ensuring seamless user experience and efficient content management.",
    type: "Experience",
    technologies: ["Next.js", "Prisma", "Vercel", "JavaScript", "PostgreSQL"],
    link: "",
    featured: true,
  },
  {
    id: 5,
    title: "Digital Assignment Cover Page Generator",
    description:
      "Created a streamlined web app to help university students generate formatted assignment cover pages quickly and easily. Focused on simplicity, usability, and print-ready output.",
    type: "Personal",
    technologies: ["Next.js", "Tailwind CSS"],
    link: "https://v-front.vercel.app",
  },
  {
    id: 2,
    title: "Smart Automated Irrigation System",
    description:
      "Led the design of an IoT-driven irrigation solution leveraging climate and soil moisture data to optimize water usage. Published research demonstrating significant improvements in agricultural efficiency.",
    type: "Research",
    technologies: ["IoT", "ThingSpeak", "DHT11", "Arduino", "Python"],
    link: "https://doi.org/10.1109/AIIoT58432.2024.10574611",
    published: true,
  },
  {
    id: 1,
    title: "Cloud-Based Smart Street Lighting System",
    description:
      "Engineered a solar-powered smart lighting network that detects pedestrian presence and activates streetlights intelligently to conserve energy and enhance safety.",
    type: "Research",
    technologies: [
      "Arduino",
      "PIR Sensor",
      "ThingSpeak",
      "C++",
      "Solar Panels",
    ],
    link: "",
  },
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
            My Projects & Research
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A timeline of work ranging from embedded systems and research to web
            platforms and machine learning applications.
          </p>
        </motion.div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center ${
            projects.length % 3 === 1
              ? "lg:grid-cols-3 justify-items-center"
              : projects.length % 3 === 2
              ? "lg:grid-cols-3 justify-items-center sm:justify-between"
              : ""
          }`}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-6 group hover:scale-[1.02] transition-all duration-300 flex flex-col"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    {project.featured && (
                      <span className="bg-gradient-to-r from-violet-600 to-purple-600 text-white text-xs px-2 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                    {project.wip && (
                      <span className="bg-yellow-600/80 text-white text-xs px-2 py-1 rounded-full">
                        WIP
                      </span>
                    )}
                    {project.published && (
    <span className="bg-green-600/80 text-white text-xs px-2 py-1 rounded-full">
      Published
    </span>
  )}
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-violet-500/20 text-violet-300 text-sm px-3 py-1 rounded-full border border-violet-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                  <Button
                    variant="ghost"
                    className="w-full justify-between text-violet-400 hover:text-white hover:bg-violet-500/20 group"
                  >
                    View Project
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
