import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Hackathon {
  id: number;
  title: string;
  description: string;
  image: string;
}

const hackathons: Hackathon[] = [
  {
    id: 3,
    title: "Agri-thon",
    description: "Won 1st place with Agrometrics, a Flutter-built bilingual app that helps farmers calculate precise fertilizer dosage.",
    image: "public/assets/3.jpeg",
  },
  {
    id: 2,
    title: "HackWars",
    description:
      "Runner-Up for our AI Therapist website offering voice and 3D avatar support for mental health. Won ₹25,000 cash prize from VIT. Gained StartupTN support, and presented to IBM and MeitY delegates.",
    image: "public/assets/1.jpeg",
  },
  {
    id: 1,
    title: "Pixels and Paths",
    description:
      "Created an app UI using Figma and Photoshop that was awarded 2nd best design — received goodies and recognition.",
    image: "public/assets/2.jpeg",
  },
];

const HackathonSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 relative" id="hackathons">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Hackathon Victories
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Showcasing my most thrilling hackathon triumphs and the innovations
            that powered them.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {hackathons.map((hack, index) => {
            const isCenter = index === 1;

            return (
              <motion.div
                key={hack.id}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8, delay: index * 0.2 }}
               className={`glass-effect neon-glow rounded-2xl overflow-hidden transition-all duration-300 ${
  isCenter
    ? "scale-105 md:scale-110 shadow-xl z-10"
    : "scale-95 md:scale-100"
} w-full md:w-1/4`}


              >
                <img
                  src={hack.image}
                  alt={hack.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 text-center">
                    {hack.title}
                  </h3>
                  <p className="text-gray-400 text-sm text-center">
                    {hack.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HackathonSection;
