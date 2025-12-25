import React from 'react';
import PropTypes from 'prop-types';

const EducationSection = ({ useIntersectionObserver }) => {
    return (
        <section
            id="education"
            className="py-12 sm:py-20 bg-[#112240] min-h-screen flex items-center px-4 sm:px-6 lg:px-8"
            aria-labelledby="education-heading"
        >
            <div className="container mx-auto">
                <h2 id="education-heading" className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-16 text-center">
                    <span className="text-[#64FFDA]">Education</span> &amp; Certifications
                </h2>
                <div
                    ref={useIntersectionObserver({ threshold: 0.2 })}
                    data-animate
                    className="max-w-3xl mx-auto"
                >
                    {/* Education Timeline */}
                    <div className="space-y-8 sm:space-y-12" role="list">
                        {/* B.Tech */}
                        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#64FFDA]" role="listitem">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#64FFDA]" aria-hidden="true"></div>
                            <div className="bg-[#0A192F] p-4 sm:p-6 rounded-lg shadow-lg">
                                <h3 className="text-lg sm:text-xl font-bold text-white">
                                    Bachelor of Technology in Information Technology
                                </h3>
                                <p className="text-[#64FFDA] mb-2">Malla Reddy Engineering College</p>
                                <p className="text-gray-400 mb-4">
                                    <time dateTime="2023">2023</time> - <time dateTime="2027">2027</time>
                                </p>
                                <p className="text-sm sm:text-base text-gray-300">
                                    Currently pursuing B.Tech in Information Technology.
                                </p>
                            </div>
                        </div>

                        {/* Intermediate */}
                        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#64FFDA]" role="listitem">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#64FFDA]" aria-hidden="true"></div>
                            <div className="bg-[#0A192F] p-4 sm:p-6 rounded-lg shadow-lg">
                                <h3 className="text-lg sm:text-xl font-bold text-white">
                                    Intermediate Education (MPC)
                                </h3>
                                <p className="text-[#64FFDA] mb-2">Telangana State Residential School &amp; Junior College</p>
                                <p className="text-gray-400 mb-4">
                                    <time dateTime="2021">2021</time> - <time dateTime="2023">2023</time>
                                </p>
                                <p className="text-sm sm:text-base text-gray-300">
                                    Completed intermediate education with Mathematics, Physics, and Chemistry.
                                </p>
                            </div>
                        </div>

                        {/* 10th Class */}
                        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#64FFDA]" role="listitem">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#64FFDA]" aria-hidden="true"></div>
                            <div className="bg-[#0A192F] p-4 sm:p-6 rounded-lg shadow-lg">
                                <h3 className="text-lg sm:text-xl font-bold text-white">
                                    Secondary School Certificate (SSC)
                                </h3>
                                <p className="text-[#64FFDA] mb-2">Zilla Parishath High School</p>
                                <p className="text-gray-400 mb-4">
                                    <time dateTime="2020">2020</time> - <time dateTime="2021">2021</time>
                                </p>
                                <p className="text-sm sm:text-base text-gray-300">
                                    Completed 10th standard with distinction.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

EducationSection.propTypes = {
    useIntersectionObserver: PropTypes.func.isRequired,
};

export default EducationSection;
