import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 75, damping: 16, delay },
  }),
};

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.h1
            custom={0.1}
            variants={fadeUp}
            className="text-6xl md:text-8xl font-bold gradient-text mb-6 leading-relaxed"
          >
            Neeraj Srinivasan
          </motion.h1>

          <motion.p
            custom={0.25}
            variants={fadeUp}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            ECE Engineer | Builder | Problem Solver
          </motion.p>

          <motion.p
            custom={0.4}
            variants={fadeUp}
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Crafting digital experiences with code, exploring the intersection
            of hardware and software, and building solutions that matter.
          </motion.p>

          <motion.div
            custom={0.55}
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={() => {
                const el = document.getElementById("internships");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8 py-4 rounded-full neon-glow transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Button>

            <a href="resume-sw.pdf">
              <Button
                variant="outline"
                size="lg"
                className="border-violet-500 text-violet-400 hover:bg-violet-500/10 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Download Resume
              </Button>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-6 h-6 text-violet-400 opacity-70" />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating rings — staggered, randomised per render */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-violet-500/15"
            style={{
              width: 60 + i * 30,
              height: 60 + i * 30,
              left: `${10 + i * 18}%`,
              top: `${15 + i * 14}%`,
            }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: [0, 0.4, 0],
              scale: [0.6, 1.1, 0.6],
            }}
            transition={{
              duration: 6 + i * 1.2,
              repeat: Infinity,
              delay: i * 1.1,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
