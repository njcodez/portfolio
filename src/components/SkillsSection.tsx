import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface Skill {
  category: string;
  skills: Array<{
    name: string;
    level: number;
    color: string;
  }>;
}

const skillsData: Skill[] = [
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML", level: 90, color: "from-teal-500 to-cyan-500" },
      { name: "Next.js", level: 85, color: "from-gray-700 to-gray-500" },
      { name: "React", level: 75, color: "from-blue-500 to-cyan-500" }
    ]
  },
  {
    category: "Backend & Database",
    skills: [
      { name: "Python", level: 90, color: "from-yellow-500 to-orange-500" },
      { name: "Node.js", level: 75, color: "from-green-600 to-green-400" },
      { name: "PostgreSQL", level: 70, color: "from-blue-700 to-blue-500" }
    ]
  },
  {
    category: "Mobile & Emerging Tech",
    skills: [
      { name: "AI/ML", level: 70, color: "from-purple-600 to-violet-600" },
      { name: "Flutter", level: 70, color: "from-blue-500 to-teal-500" },
      { name: "IoT/Arduino", level: 65, color: "from-orange-500 to-red-500" }
    ]
  }
];

const SkillsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 relative" id="skills">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical proficiency across various 
            technologies and development stacks.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="glass-effect rounded-2xl p-8 neon-glow"
            >
              <h3 className="text-xl font-bold text-violet-400 mb-6 text-center">
                {category.category}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: (categoryIndex * 0.2) + (skillIndex * 0.1) 
                    }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          duration: 1.2, 
                          delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3,
                          ease: "easeOut"
                        }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Tech Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h4 className="text-lg font-semibold text-gray-400 mb-8">
            Additional Technologies & Tools
          </h4>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "Git", "Docker", "AWS", "Firebase", "Figma", "VS Code", 
              "Postman", "Jupyter", "Arduino IDE", "Android Studio"
            ].map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 1 + (index * 0.05) }}
                className="bg-violet-500/10 text-violet-300 px-4 py-2 rounded-full border border-violet-500/20 hover:border-violet-500/40 transition-colors"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
