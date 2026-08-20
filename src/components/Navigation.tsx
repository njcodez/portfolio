
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'internships', label: 'Experience' },
    { id: 'publications', label: 'Publications' },
    { id: 'skills', label: 'Skills' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMenuOpen(false);
    // Small delay so the menu animates out before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 120);
  };

  const scrollToTop = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Burger icon lines animation
  const topLine: Variants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 7 },
  };
  const midLine: Variants = {
    closed: { opacity: 1, scaleX: 1 },
    open: { opacity: 0, scaleX: 0 },
  };
  const botLine: Variants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -7 },
  };

  // Mobile menu slide-down
  const menuVariants: Variants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.25, ease: 'easeInOut' } },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3, ease: 'easeInOut', staggerChildren: 0.05, delayChildren: 0.05 },
    },
    exit: { opacity: 0, height: 0, transition: { duration: 0.22, ease: 'easeInOut' } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -16 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 220, damping: 22 } },
    exit: { opacity: 0, x: -12, transition: { duration: 0.15 } },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || menuOpen
            ? 'glass-effect shadow-lg shadow-violet-500/10'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          {/* Top bar */}
          <div className="flex items-center justify-between h-16">
            <motion.button
              onClick={scrollToTop}
              className="text-2xl font-bold gradient-text hover:scale-105 transition-transform cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              NJ
            </motion.button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-violet-400 relative ${
                    activeSection === item.id
                      ? 'text-violet-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-violet-400"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Burger button (mobile) */}
            <motion.button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-0 rounded-lg focus:outline-none"
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              whileTap={{ scale: 0.9 }}
            >
              <motion.span
                className="block w-6 h-0.5 bg-white origin-center"
                variants={topLine}
                animate={menuOpen ? 'open' : 'closed'}
                transition={{ duration: 0.25 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-white mt-1.5 origin-center"
                variants={midLine}
                animate={menuOpen ? 'open' : 'closed'}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-white mt-1.5 origin-center"
                variants={botLine}
                animate={menuOpen ? 'open' : 'closed'}
                transition={{ duration: 0.25 }}
              />
            </motion.button>
          </div>

          {/* Mobile dropdown */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                key="mobile-menu"
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="md:hidden overflow-hidden"
              >
                <div className="flex flex-col pb-4 pt-1 gap-1">
                  {navItems.map(item => (
                    <motion.button
                      key={item.id}
                      variants={itemVariants}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200 ${
                        activeSection === item.id
                          ? 'text-violet-400 bg-violet-500/10'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.label}
                      {activeSection === item.id && (
                        <span className="ml-2 inline-block w-1.5 h-1.5 rounded-full bg-violet-400 align-middle" />
                      )}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Backdrop (tapping outside closes the menu) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
