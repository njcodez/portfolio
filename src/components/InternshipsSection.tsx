
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface Internship {
  id: number;
  company: string;
  role: string;
  duration: string;
  description: string;
  keyLearnings: string[];
}

const internships: Internship[] = [
  {
    id: 1,
    company: "Aries Biomed Technology Pvt. Ltd.",
    role: "Embedded Programming Intern",
    duration: "June 2024 - July 2024",
    description: "Worked on real-time embedded systems involving STM32 boards and GUI development for biomedical applications. Focused on performance, data visualization, and embedded Linux.",
    keyLearnings: [
      "Developed a scalable GUI on an STM32 board using Qt and C++",
      "Plotted real-time ECG data for clinical use",
      "Gained experience in embedded Linux development and microprocessor interfacing",
      "Learned biomedical-specific firmware workflows"
    ]
  },
  {
    id: 2,
    company: "RC Studios",
    role: "Full-Stack Developer",
    duration: "Feb 2024 - May 2024",
    description: "Led the design and development of an OTT platform for a regional TV network. Delivered a responsive, full-stack solution with a custom admin panel.",
    keyLearnings: [
      "Built a production-grade OTT platform using Next.js",
      "Led a small dev team and reviewed full-stack code (frontend & backend)",
      "Integrated Prisma for database management and used Vercel for deployment",
      "Focused on scalability, client needs, and clean UI/UX delivery"
    ]
  }
];

const InternshipsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 relative" id="internships">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Practical experience gained through internships in software development 
            and technology innovation.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {internships.map((internship, index) => (
            <motion.div
              key={internship.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-effect rounded-2xl p-8 neon-glow hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {internship.role}
                  </h3>
                  <h4 className="text-xl text-violet-400 mb-2">
                    {internship.company}
                  </h4>
                  <p className="text-gray-400 font-medium">
                    {internship.duration}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {internship.description}
              </p>
              
              <div>
                <h5 className="text-lg font-semibold text-violet-400 mb-4">
                  Key Learnings & Achievements:
                </h5>
                <ul className="space-y-2">
                  {internship.keyLearnings.map((learning, learningIndex) => (
                    <motion.li
                      key={learningIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: (index * 0.2) + (learningIndex * 0.1) }}
                      className="flex items-start space-x-3 text-gray-300"
                    >
                      <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{learning}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipsSection;
