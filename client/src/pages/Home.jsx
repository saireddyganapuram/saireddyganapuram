import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { loadFull } from 'tsparticles';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Toast from '../components/Toast';
import ProjectModal from '../components/ProjectModal';
import ErrorBoundary from '../components/ErrorBoundary';
import { OBSERVER_CONFIG } from '../constants/constants';

// Lazy load section components for better performance
const HeroSection = lazy(() => import('../components/sections/HeroSection'));
const AboutSection = lazy(() => import('../components/sections/AboutSection'));
const SkillsSection = lazy(() => import('../components/sections/SkillsSection'));
const ProjectsSection = lazy(() => import('../components/sections/ProjectsSection'));
const EducationSection = lazy(() => import('../components/sections/EducationSection'));
const ContactSection = lazy(() => import('../components/sections/ContactSection'));

const Home = () => {
  // Custom hook for intersection observer
  const useIntersectionObserver = (options = OBSERVER_CONFIG) => {
    const elementRef = useRef(null);

    useEffect(() => {
      if (!elementRef.current) return;

      const currentElement = elementRef.current;

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          currentElement?.classList.add('animate-in');
        }
      }, options);

      observer.observe(currentElement);

      return () => {
        observer.unobserve(currentElement);
      };
    }, [options]);

    return elementRef;
  };

  // Animation styles
  const styles = `
    .animate-in {
      animation: fadeInUp 0.6s ease-out forwards;
    }
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    [data-animate] {
      opacity: 0;
    }
    @keyframes slideIn {
      0% { transform: translateY(100%); opacity: 0; }
      5% { transform: translateY(0); opacity: 1; }
      20% { transform: translateY(0); opacity: 1; }
      25% { transform: translateY(-100%); opacity: 0; }
      100% { transform: translateY(-100%); opacity: 0; }
    }
    @keyframes slideIn2 {
      0%, 25% { transform: translateY(100%); opacity: 0; }
      30% { transform: translateY(0); opacity: 1; }
      45% { transform: translateY(0); opacity: 1; }
      50% { transform: translateY(-100%); opacity: 0; }
      100% { transform: translateY(-100%); opacity: 0; }
    }
    @keyframes slideIn3 {
      0%, 50% { transform: translateY(100%); opacity: 0; }
      55% { transform: translateY(0); opacity: 1; }
      70% { transform: translateY(0); opacity: 1; }
      75% { transform: translateY(-100%); opacity: 0; }
      100% { transform: translateY(-100%); opacity: 0; }
    }
    @keyframes slideIn4 {
      0%, 75% { transform: translateY(100%); opacity: 0; }
      80% { transform: translateY(0); opacity: 1; }
      95% { transform: translateY(0); opacity: 1; }
      100% { transform: translateY(-100%); opacity: 0; }
    }
  `;

  // State management
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [selectedProject, setSelectedProject] = useState(null);

  // Particles initialization
  const particlesInit = async (engine) => {
    try {
      await loadFull(engine);
    } catch (error) {
      console.error('Error initializing particles:', error);
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation functions
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Project modal handlers
  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  // Loading fallback component
  const LoadingFallback = () => (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-[#64FFDA] text-xl" aria-live="polite">
        Loading...
      </div>
    </div>
  );

  return (
    <div className="bg-[#0A192F] text-gray-200 min-h-screen font-sans">
      <style>{styles}</style>
      <style>
        {`
          .animate-typing {
            animation: slideIn 16s ease-in-out infinite;
          }
          .animate-typing-2 {
            animation: slideIn2 16s ease-in-out infinite;
          }
          .animate-typing-3 {
            animation: slideIn3 16s ease-in-out infinite;
          }
          .animate-typing-4 {
            animation: slideIn4 16s ease-in-out infinite;
          }
        `}
      </style>

      {/* Navigation */}
      <Navigation
        isMenuOpen={isMenuOpen}
        activeSection={activeSection}
        toggleMenu={toggleMenu}
        scrollToSection={scrollToSection}
      />

      {/* Main Content - Lazy loaded sections with error boundaries */}
      <ErrorBoundary fallbackMessage="Unable to load this section">
        <Suspense fallback={<LoadingFallback />}>
          <HeroSection
            particlesInit={particlesInit}
            scrollToSection={scrollToSection}
          />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallbackMessage="Unable to load About section">
        <Suspense fallback={<LoadingFallback />}>
          <AboutSection useIntersectionObserver={useIntersectionObserver} />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallbackMessage="Unable to load Skills section">
        <Suspense fallback={<LoadingFallback />}>
          <SkillsSection useIntersectionObserver={useIntersectionObserver} />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallbackMessage="Unable to load Projects section">
        <Suspense fallback={<LoadingFallback />}>
          <ProjectsSection
            useIntersectionObserver={useIntersectionObserver}
            handleProjectClick={handleProjectClick}
          />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallbackMessage="Unable to load Education section">
        <Suspense fallback={<LoadingFallback />}>
          <EducationSection useIntersectionObserver={useIntersectionObserver} />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallbackMessage="Unable to load Contact section">
        <Suspense fallback={<LoadingFallback />}>
          <ContactSection
            useIntersectionObserver={useIntersectionObserver}
            setToast={setToast}
          />
        </Suspense>
      </ErrorBoundary>

      {/* Footer */}
      <Footer />

      {/* Toast Notification */}
      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ ...toast, show: false })}
        />
      )}

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </div>
  );
};

export default Home;
