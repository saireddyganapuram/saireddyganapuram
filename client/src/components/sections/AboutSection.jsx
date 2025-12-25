import React from 'react';
import PropTypes from 'prop-types';
import SaiReddy from '../../assets/image1.png';

const AboutSection = ({ useIntersectionObserver }) => {
    return (
        <section
            id="about"
            className="py-12 sm:py-20 min-h-screen flex items-center px-4 sm:px-6 lg:px-8"
            aria-labelledby="about-heading"
        >
            <div className="container mx-auto">
                <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-16 text-center">
                    <span className="text-[#64FFDA]">About</span> Me
                </h2>
                <div
                    ref={useIntersectionObserver({ threshold: 0.2 })}
                    data-animate
                    className="flex flex-col md:flex-row items-center gap-8 sm:gap-12"
                >
                    <div className="w-full md:w-1/3 max-w-[300px] mx-auto">
                        <div className="relative group">
                            <div className="relative overflow-hidden rounded-full border-2 border-[#64FFDA] border-solid">
                                <img
                                    src={SaiReddy}
                                    alt="Sai Reddy Ganapuram - Full Stack Developer"
                                    className="w-full h-auto object-cover object-top"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-2/3">
                        <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">
                            Hi, I&apos;m Sai Reddy Ganapuram — I am a motivated and enthusiastic B.Tech student with a strong foundation in Information Technology, specializing in the MERN stack and DSA in Python. My learning journey has helped me build a solid understanding of both development principles and practical implementation.
                        </p>
                        <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">
                            Over time, I have developed hands-on experience in building full-stack applications, automating workflows, and working with modern web technologies. Driven by curiosity, I am currently exploring DevOps to better understand how development and operations come together to create efficient, scalable systems.
                        </p>
                        <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">
                            I enjoy learning new tools, taking on challenges, and working in collaborative environments where I can grow and contribute meaningfully. I am now seeking opportunities to apply my skills, gain real-world experience, and advance toward becoming a capable full-stack and DevOps engineer.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

AboutSection.propTypes = {
    useIntersectionObserver: PropTypes.func.isRequired,
};

export default AboutSection;
