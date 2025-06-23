
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap } from 'lucide-react';

interface Education {
  id: number;
  institution: string;
  level: string;
  years: string;
  grade: string;
  description: string;
}
const education: Education[] = [
  {
    id: 1,
    institution: "Vellore Institute of Technology, Vellore",
    level: "Bachelor of Technology – Electronics & Communication Engineering",
    years: "2022 – 2026",
    grade: "CGPA: 8.51",
    description: "Vice Chairperson of Solai Club, led club initiatives and actively participated in hackathons."
  },
  {
    id: 2,
    institution: "DAV Boys Higher Secondary School, Chennai",
    level: "Higher Secondary Education (12th)",
    years: "2021 – 2022",
    grade: "Percentage: 91.2%",
    description: ""
  },
  {
    id: 3,
    institution: "Jawahar Vidyalaya, Chennai",
    level: "Secondary Education (10th)",
    years: "2007 – 2020",
    grade: "Percentage: 92.4%",
    description: ""
  }
];


const EducationSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 relative" id="education">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Education
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My academic journey and the foundations that shaped my technical expertise
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="mb-8 last:mb-0"
            >
              <div className="glass-effect rounded-2xl p-8 neon-glow hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-4 right-4 opacity-10">
                  <GraduationCap className="w-16 h-16 text-violet-400" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {edu.institution}
                      </h3>
                      <p className="text-violet-400 font-semibold mb-1">
                        {edu.level}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-400">
                        <span className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                          {edu.years}
                        </span>
                        <span className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
                
                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500/20 via-transparent to-cyan-400/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
