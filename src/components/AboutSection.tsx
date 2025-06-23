import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 relative" id="about">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text text-center mb-12">
            About Me
          </h2>

          <div className="glass-effect rounded-2xl p-8 md:p-12 neon-glow">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm an Electronics and Communication Engineering student with a
                passion for bridging the gap between hardware and software. My
                journey in technology has led me through various domains, from
                circuit design to full-stack development.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                With experience in web development, mobile applications, and
                embedded systems, I enjoy tackling complex problems and creating
                innovative solutions. My technical exposure spans across modern
                web technologies, mobile platforms, and low-level programming.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring emerging
                technologies, contributing to research projects, or mentoring
                fellow students in their programming journey. I believe in the
                power of technology to transform ideas into reality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4 text-center"
            >
               <div className="bg-violet-500/10 rounded-lg p-4 border border-violet-500/20">
                <h3 className="text-2xl font-bold text-violet-400">5+</h3>
                <p className="text-gray-400">Years Coding</p>
              </div>
              <div className="bg-violet-500/10 rounded-lg p-4 border border-violet-500/20">
                <h3 className="text-2xl font-bold text-violet-400">20+</h3>
                <p className="text-gray-400">Projects</p>
              </div>
              <div className="bg-violet-500/10 rounded-lg p-4 border border-violet-500/20">
                <h3 className="text-2xl font-bold text-violet-400">2</h3>
                <p className="text-gray-400">Internships</p>
              </div>
               <div className="bg-violet-500/10 rounded-lg p-4 border border-violet-500/20">
                <h3 className="text-2xl font-bold text-violet-400">3</h3>
                <p className="text-gray-400">Hackathons Won</p>
              </div>
              
             
             <div className="bg-violet-500/10 rounded-lg p-4 border border-violet-500/20">
                <h3 className="text-2xl font-bold text-violet-400">1</h3>
                <p className="text-gray-400">Publication</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
