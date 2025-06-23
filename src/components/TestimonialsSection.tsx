import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Vimalraj",
    role: "Manager",
    company: "Aries Biomed Technology Pvt. Ltd., Coimbatore",
    quote:
      "Neeraj showed great enthusiasm and dedication while working on Embedded Programming during his internship at Aries Biomed Technology Private Limited, Coimbatore. He actively contributed to building a GUI interface.",
    avatar: "VR",
  },
  {
    id: 2,
    name: "Gowthaman",
    role: "Founder",
    company: "RC Television",
    quote:
      "Neeraj was hired to create an OTT platform for an existing TV channel at our studio. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of the client. He built the website from scratch and completed the work on time. The UI is one of the best I've seen till date.",
    avatar: "GN",
  },
];

const TestimonialsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 relative" id="testimonials">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            What People Say
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Feedback from mentors, colleagues, and collaborators I've had the
            privilege to work with.
          </p>
        </motion.div>

        <div
          className={`max-w-6xl mx-auto grid gap-8 ${
            testimonials.length === 2
              ? "grid-cols-1 md:grid-cols-2 justify-center"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, rotateY: 0 }
                  : { opacity: 0, y: 50, rotateY: -15 }
              }
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-effect rounded-2xl p-8 neon-glow hover:scale-105 transition-all duration-300 relative"
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-6 text-6xl text-violet-500/20 font-serif">
                "
              </div>

              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed italic relative z-10">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-violet-400 text-sm">
                      {testimonial.role}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
