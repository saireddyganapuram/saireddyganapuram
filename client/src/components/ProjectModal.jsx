import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = ({ project, onClose }) => {
  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-[#112240] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <h2 id="modal-title" className="text-2xl font-bold text-[#64FFDA]">{project.title}</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <i className="fas fa-times text-xl" aria-hidden="true"></i>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Project Image */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#64FFDA] to-[#0A192F] rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Overview</h4>
                  <p className="text-gray-300">{project.overview}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Key Features</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#0A192F] text-[#64FFDA] rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Technical Implementation</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {project.implementation.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-4 pt-4">
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#64FFDA] text-[#0A192F] font-semibold px-6 py-3 rounded-lg flex items-center space-x-2"
                  >
                    <i className="fab fa-github"></i>
                    <span>View Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-[#64FFDA] text-[#64FFDA] font-semibold px-6 py-3 rounded-lg flex items-center space-x-2"
                  >
                    <i className="fas fa-external-link-alt"></i>
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

ProjectModal.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    implementation: PropTypes.arrayOf(PropTypes.string).isRequired,
    githubLink: PropTypes.string.isRequired,
    demoLink: PropTypes.string.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

export default ProjectModal; 