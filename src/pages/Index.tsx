
import React from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import ProjectsSection from '@/components/ProjectsSection';
import InternshipsSection from '@/components/InternshipsSection';
import PublicationsSection from '@/components/PublicationsSection';
import SkillsSection from '@/components/SkillsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import HackathonSection from '@/components/HackathonSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-cosmic relative">
      <ParticleBackground />
      <Navigation />
      
      <main className="relative z-10">
        <div id="hero">
          <HeroSection />
        </div>
        <AboutSection />
        <HackathonSection />
        <EducationSection />
        <ProjectsSection />
        <InternshipsSection />
        <PublicationsSection />
        <SkillsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-violet-500/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Neeraj Srinivasan. Built with React, TypeScript & Framer Motion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
