"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Lock } from "lucide-react";

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
    id: 5,
    title: "Digital Assignment Cover Page Generator",
    description:
      "Created a streamlined web app to help university students generate formatted assignment cover pages quickly and easily. Focused on simplicity, usability, and print-ready output.",
    type: "Personal",
    technologies: ["Next.js", "Tailwind CSS"],
    link: "https://v-front.vercel.app",
  },
  
  {
  id: 10,
  title: "Paste2PDF",
  description:
    "Built a privacy-focused browser tool for converting screenshots and images into PDFs entirely on the client side, with drag-and-drop page reordering, previews, custom page sizes, and local data persistence.",
  type: "Personal",
  technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "pdf-lib"],
  link: "https://paste2pdf.vercel.app",
  featured: true,
},
  {
  id: 6,
  title: "GymFlow",
  description:
    "Developed a comprehensive gym management system that helps admins manage the entire gym, including trainers, trainees, and workout activities. Trainers can manage assigned trainees and create or assign personalized workout activities, while trainees can track their assigned workouts and training progress. Provides centralized control and streamlined gym operations through an admin dashboard.",
  type: "Personal",
  technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
  link: "https://gymorganizer.vercel.app",
  featured: true,
},
{
  id: 71,
  title: "Real Estate Shipment Tracker",
  description:
  "Developed a shipment management platform connecting real estate customers with raw material suppliers, enabling efficient material sourcing, order management, and real-time shipment tracking.",
  type: "Personal",
  technologies: ["NextJS", "Prisma", "JWT"],
  link: "https://akinfra.vercel.app",
  featured: true,
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
    id: 3,
    title: "OTT Platform Development",
    description:
      "Led the full-stack development of a scalable OTT streaming platform with an integrated admin panel, ensuring seamless user experience and efficient content management.",
    type: "Experience",
    technologies: ["Next.js", "Prisma", "Vercel", "JavaScript", "PostgreSQL"],
    link: "https://rctv.in",
    featured: true,
  },
 
  {
    id: 72,
    title: "Prompt Community for AI Image Generation",
    description:
      "Building a dynamic community platform enabling users to share and explore trending AI-generated image prompts. Features user uploads and interactive discussions to fuel creativity.",
    type: "Personal",
    technologies: ["Next.js", "Cloudinary", "Prisma", "Vercel"],
    link: "https://aiprompters.web.app",
    wip: true,
  },
  {
    id: 6,
    title: "AI Recipe Generator from Ingredient Images",
    description:
      "Developed an intelligent recipe generator that processes photos of ingredients using OCR and advanced object detection models. Provides tailored recipe suggestions powered by Gemini SDK and machine learning.",
    type: "Personal",
    technologies: ["Gemini SDK", "YOLO", "OCR", "ML", "Python"],
    link: "https://airecipegen.vercel.app",
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

// Shared animation variants for natural, spring-based motion
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 90,
      damping: 18,
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 80, damping: 16 },
  },
};

const ProjectsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 relative" id="projects">
      <div className="container mx-auto px-6">
        <motion.div
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            My Projects &amp; Research
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A timeline of work ranging from embedded systems and research to web
            platforms and machine learning applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="glass-effect rounded-2xl p-6 group hover:scale-[1.02] transition-transform duration-300 flex flex-col"
              whileHover={{ y: -4 }}
            >
              <div className="flex flex-col h-full space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <div className="flex flex-col gap-1 shrink-0">
                    {project.featured && (
                      <span className="bg-gradient-to-r from-violet-600 to-purple-600 text-white text-xs px-2 py-1 rounded-full text-center">
                        Featured
                      </span>
                    )}
                    {project.wip && (
                      <span className="bg-yellow-600/80 text-white text-xs px-2 py-1 rounded-full text-center">
                        WIP
                      </span>
                    )}
                    {project.published && (
                      <span className="bg-green-600/80 text-white text-xs px-2 py-1 rounded-full text-center">
                        Published
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed text-sm flex-1">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-violet-500/20 text-violet-300 text-xs px-3 py-1 rounded-full border border-violet-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-auto pt-2">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button
                        variant="ghost"
                        className="w-full justify-between text-violet-400 hover:text-white hover:bg-violet-500/20 group/btn"
                      >
                        {project.published ? "View Publication" : "View Project"}
                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </Button>
                    </a>
                  ) : (
                    <Button
                      variant="ghost"
                      disabled
                      className="w-full justify-between text-gray-600 cursor-not-allowed opacity-50"
                    >
                      {project.wip ? "In Progress" : "Private / Unpublished"}
                      <Lock className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
