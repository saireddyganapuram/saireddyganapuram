import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { projects } from '../../data/projects';

const ProjectsSection = ({ useIntersectionObserver, handleProjectClick }) => {
    return (
        <section
            id="projects"
            className="py-12 sm:py-20 min-h-screen flex items-center relative z-10 px-4 sm:px-6 lg:px-8"
            aria-labelledby="projects-heading"
        >
            <div className="container mx-auto">
                <h2 id="projects-heading" className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-16 text-center">
                    <span className="text-[#64FFDA]">Featured</span> Projects
                </h2>
                <div
                    ref={useIntersectionObserver({ threshold: 0.2 })}
                    data-animate
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto relative z-20"
                    role="list"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-[#112240] rounded-lg overflow-hidden cursor-pointer relative z-30"
                            onClick={() => handleProjectClick(project)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    handleProjectClick(project);
                                }
                            }}
                            style={{ pointerEvents: 'auto' }}
                            role="listitem"
                            tabIndex="0"
                            aria-label={`View details for ${project.title}`}
                        >
                            <div className="relative group">
                                <div className="absolute -inset-2 bg-gradient-to-r from-[#64FFDA] to-[#0A192F] rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                                <div className="relative overflow-hidden rounded-lg">
                                    <img
                                        src={project.image}
                                        alt={`${project.title} screenshot`}
                                        className="w-full h-40 sm:h-48 object-cover"
                                    />
                                </div>
                            </div>
                            <div className="p-4 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-bold text-[#64FFDA] mb-2">{project.title}</h3>
                                <p className="text-sm sm:text-base text-gray-400">{project.overview.substring(0, 150)}...</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

ProjectsSection.propTypes = {
    useIntersectionObserver: PropTypes.func.isRequired,
    handleProjectClick: PropTypes.func.isRequired,
};

export default ProjectsSection;
