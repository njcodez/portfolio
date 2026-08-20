import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 85, damping: 18 },
  },
};

const skillRowVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 100, damping: 18 },
  },
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.82 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 120, damping: 16 },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 80, damping: 16 },
  },
};

const SkillsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-20 relative" id="skills">
      <div className="container mx-auto px-6">
        <motion.div
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {skillsData.map((category) => (
            <motion.div
              key={category.category}
              variants={cardVariants}
              className="glass-effect rounded-2xl p-8 neon-glow"
            >
              <h3 className="text-xl font-bold text-violet-400 mb-6 text-center">
                {category.category}
              </h3>

              <motion.div
                variants={containerVariants}
                className="space-y-6"
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={skillRowVariants}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>

                    <div className="h-2 bg-gray-700/60 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{
                          type: 'spring',
                          stiffness: 55,
                          damping: 18,
                          delay: 0.25,
                        }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Tech chips */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.045, delayChildren: 0.4 } } }}
          className="mt-16 text-center"
        >
          <motion.h4
            variants={headingVariants}
            className="text-lg font-semibold text-gray-400 mb-8"
          >
            Additional Technologies &amp; Tools
          </motion.h4>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "Git", "Docker", "AWS", "Firebase", "Figma", "VS Code",
              "Postman", "Jupyter", "Arduino IDE", "Android Studio"
            ].map((tool) => (
              <motion.span
                key={tool}
                variants={chipVariants}
                whileHover={{ scale: 1.08, transition: { type: 'spring', stiffness: 200 } }}
                className="bg-violet-500/10 text-violet-300 px-4 py-2 rounded-full border border-violet-500/20 hover:border-violet-500/40 transition-colors cursor-default"
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
