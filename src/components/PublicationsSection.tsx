
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface Publication {
  id: number;
  title: string;
  journal: string;
  year: string;
  authors: string;
  abstract: string[];
  link: string;
  tags: string[];
}

const publications: Publication[] = [
  {
    id: 1,
    title: "IoT and Cloud based Automated Irrigation System",
    journal: "2024 3rd International Conference on Artificial Intelligence For Internet of Things (AIIoT)",
    year: "2024",
    authors: "Neeraj [Your Last Name]",
    abstract: [
      "Integrated soil moisture sensors, water level detectors, and weather prediction APIs for real-time irrigation control.",
      "Utilized cloud services to collect and analyze sensor data for smart decision-making.",
      "Developed a user-friendly Flutter mobile app for remote irrigation management.",
      "Implemented AI algorithms to customize watering schedules based on crop types.",
      "Automatically adjusted watering times using weather forecast data to optimize plant growth.",
      "Improved irrigation efficiency and promoted climate-resilient agriculture."
    ],
    link: "https://doi.org/10.1109/AIIoT58432.2024.10574611",
    tags: ["IoT", "Cloud Computing", "Agriculture", "AI", "Automation"],
  }
];


const PublicationsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 relative" id="publications">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Research Publications
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Contributing to the academic community through research in emerging technologies, 
            smart systems, and innovative engineering solutions.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {publications.map((publication, index) => (
            <motion.div
              key={publication.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-effect rounded-2xl p-8 neon-glow hover:scale-[1.01] transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                      {publication.title}
                    </h3>
                    
                    <div className="space-y-2">
                      <p className="text-violet-400 font-medium">
                        {publication.journal} • {publication.year}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {publication.authors}
                      </p>
                    </div>
                  </div>
                  <a href={publication.link} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-violet-400 hover:text-white hover:bg-violet-500/20 mt-4 lg:mt-0"
                  >
                    Read Paper
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button></a>
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  {publication.abstract}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {publication.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-cyan-500/20 text-cyan-300 text-sm px-3 py-1 rounded-full border border-cyan-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
