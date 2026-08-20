import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 85, damping: 18 },
  },
};

const statVariants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 110, damping: 16 },
  },
};

const AboutSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 relative" id="about">
      <div className="container mx-auto px-6">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text text-center mb-12">
            About Me
          </h2>

          <div className="glass-effect rounded-2xl p-8 md:p-12 neon-glow">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-6"
            >
              <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed">
                I'm an Electronics and Communication Engineering student with a
                passion for bridging the gap between hardware and software. My
                journey in technology has led me through various domains, from
                circuit design to full-stack development.
              </motion.p>

              <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed">
                With experience in web development, mobile applications, and
                embedded systems, I enjoy tackling complex problems and creating
                innovative solutions. My technical exposure spans across modern
                web technologies, mobile platforms, and low-level programming.
              </motion.p>

              <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring emerging
                technologies, contributing to research projects, or mentoring
                fellow students in their programming journey. I believe in the
                power of technology to transform ideas into reality.
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4 text-center"
            >
              {[
                { value: "5+", label: "Years Coding" },
                { value: "20+", label: "Projects" },
                { value: "2", label: "Internships" },
                { value: "4", label: "Hackathons Won" },
                { value: "1", label: "Publication" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={statVariants}
                  className="bg-violet-500/10 rounded-lg p-4 border border-violet-500/20 hover:border-violet-500/40 transition-colors"
                >
                  <h3 className="text-2xl font-bold text-violet-400">{stat.value}</h3>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
