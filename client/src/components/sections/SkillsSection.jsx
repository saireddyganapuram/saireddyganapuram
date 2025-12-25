import React from 'react';
import PropTypes from 'prop-types';

const SkillsSection = ({ useIntersectionObserver }) => {
    const frontendSkills = [
        { name: 'React', icon: 'ri-reactjs-fill' },
        { name: 'JavaScript', icon: 'ri-javascript-line' },
        { name: 'HTML5', icon: 'ri-html5-fill' },
        { name: 'CSS3', icon: 'ri-css3-fill' },
        { name: 'Tailwind CSS', icon: 'ri-tailwind-css-fill' },
        { name: 'Next.js', icon: 'ri-nextjs-line' },
    ];

    const backendSkills = [
        { name: 'Node.js', icon: 'ri-nodejs-line' },
        { name: 'Express.js', icon: 'ri-server-fill' },
        { name: 'MongoDB', icon: 'ri-database-2-fill' },
        { name: 'Python', icon: 'fab fa-python' },
        { name: 'REST API', icon: 'ri-arrow-left-right-line' },
        { name: 'SQL', icon: 'ri-table-line' },
    ];

    const toolsSkills = [
        { name: 'Git', icon: 'ri-git-merge-fill' },
        { name: 'GitHub', icon: 'ri-github-fill' },
        { name: 'Linux', icon: 'fas fa-linux' },
        { name: 'Docker', icon: 'fab fa-docker' },
        { name: 'AWS', icon: 'fab fa-aws' },
        { name: 'CI/CD', icon: 'ri-loop-right-fill' },
    ];

    return (
        <section
            id="skills"
            className="py-12 sm:py-20 bg-black/30 min-h-screen flex items-center backdrop-blur-sm px-4 sm:px-6 lg:px-8"
            aria-labelledby="skills-heading"
        >
            <div className="container mx-auto">
                <h2 id="skills-heading" className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-16 text-center">
                    <span className="text-[#64FFDA]">My</span> Skills
                </h2>
                <div
                    ref={useIntersectionObserver({ threshold: 0.2 })}
                    data-animate
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10"
                >
                    {/* Frontend Skills */}
                    <div className="bg-black/40 p-6 sm:p-8 rounded-lg shadow-lg backdrop-blur-sm border border-white/10">
                        <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white flex items-center">
                            <i className="fas fa-code text-[#64FFDA] mr-3" aria-hidden="true"></i>
                            Frontend
                        </h3>
                        <div className="grid grid-cols-2 gap-3 sm:gap-4" role="list">
                            {frontendSkills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex items-center p-2 sm:p-3 bg-[#1D2D50] rounded-lg hover:bg-[#233554] transition-all transform hover:scale-105 cursor-pointer text-sm sm:text-base"
                                    role="listitem"
                                    tabIndex="0"
                                    aria-label={`Frontend skill: ${skill.name}`}
                                >
                                    <i
                                        className={`${skill.icon} text-[#64FFDA] text-lg sm:text-xl mr-2 sm:mr-3`}
                                        aria-hidden="true"
                                    ></i>
                                    <span>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Backend Skills */}
                    <div className="bg-black/40 p-6 sm:p-8 rounded-lg shadow-lg backdrop-blur-sm border border-white/10">
                        <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white flex items-center">
                            <i className="fas fa-server text-[#64FFDA] mr-3" aria-hidden="true"></i>
                            Backend
                        </h3>
                        <div className="grid grid-cols-2 gap-3 sm:gap-4" role="list">
                            {backendSkills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex items-center p-2 sm:p-3 bg-[#1D2D50] rounded-lg hover:bg-[#233554] transition-all transform hover:scale-105 cursor-pointer text-sm sm:text-base"
                                    role="listitem"
                                    tabIndex="0"
                                    aria-label={`Backend skill: ${skill.name}`}
                                >
                                    <i
                                        className={`${skill.icon} text-[#64FFDA] text-lg sm:text-xl mr-2 sm:mr-3`}
                                        aria-hidden="true"
                                    ></i>
                                    <span>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tools & Others */}
                    <div className="bg-black/40 p-6 sm:p-8 rounded-lg shadow-lg backdrop-blur-sm border border-white/10">
                        <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white flex items-center">
                            <i className="fas fa-tools text-[#64FFDA] mr-3" aria-hidden="true"></i>
                            Tools &amp; Others
                        </h3>
                        <div className="grid grid-cols-2 gap-3 sm:gap-4" role="list">
                            {toolsSkills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex items-center p-2 sm:p-3 bg-[#1D2D50] rounded-lg hover:bg-[#233554] transition-all transform hover:scale-105 cursor-pointer text-sm sm:text-base"
                                    role="listitem"
                                    tabIndex="0"
                                    aria-label={`Tool: ${skill.name}`}
                                >
                                    <i
                                        className={`${skill.icon} text-[#64FFDA] text-lg sm:text-xl mr-2 sm:mr-3`}
                                        aria-hidden="true"
                                    ></i>
                                    <span>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

SkillsSection.propTypes = {
    useIntersectionObserver: PropTypes.func.isRequired,
};

export default SkillsSection;
