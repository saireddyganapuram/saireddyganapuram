import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import Typewriter from 'typewriter-effect';
import { PARTICLE_CONFIG, ANIMATION_DURATION, ANIMATION_DELAY, SPRING_CONFIG } from '../../constants/constants';
import ErrorBoundary from '../ErrorBoundary';

const HeroAnimation = lazy(() => import('../3d/HeroAnimation'));

const HeroSection = ({ particlesInit, scrollToSection }) => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center pt-20 relative overflow-hidden px-4 sm:px-6 lg:px-8"
            style={{
                position: 'relative',
                zIndex: 1,
                isolation: 'isolate',
            }}
            aria-label="Hero section"
        >
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    particles: {
                        number: { value: PARTICLE_CONFIG.NUMBER, density: { enable: true, value_area: PARTICLE_CONFIG.DENSITY_AREA } },
                        color: { value: PARTICLE_CONFIG.COLOR },
                        opacity: { value: PARTICLE_CONFIG.OPACITY },
                        size: { value: PARTICLE_CONFIG.SIZE },
                        line_linked: {
                            enable: true,
                            distance: PARTICLE_CONFIG.LINK_DISTANCE,
                            color: PARTICLE_CONFIG.COLOR,
                            opacity: PARTICLE_CONFIG.LINK_OPACITY,
                            width: 1,
                        },
                        move: {
                            enable: true,
                            speed: PARTICLE_CONFIG.MOVE_SPEED,
                            direction: 'none',
                            random: true,
                            straight: false,
                            out_mode: 'out',
                            bounce: false,
                        },
                    },
                    interactivity: {
                        detect_on: 'canvas',
                        events: {
                            onhover: { enable: true, mode: 'grab' },
                            onclick: { enable: true, mode: 'push' },
                            resize: true,
                        },
                        modes: {
                            grab: { distance: 140, line_linked: { opacity: 0.5 } },
                            push: { particles_nb: 4 },
                        },
                    },
                    retina_detect: true,
                }}
                className="absolute inset-0"
                aria-hidden="true"
            />

            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    duration: ANIMATION_DURATION.VERY_SLOW,
                    ...SPRING_CONFIG.STIFF,
                }}
                className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-start relative z-10 -mt-8"
            >
                <motion.div
                    initial={{ x: -200, rotate: -5, opacity: 0 }}
                    animate={{ x: 0, rotate: 0, opacity: 1 }}
                    transition={{
                        duration: 1,
                        ...SPRING_CONFIG.SOFT,
                        delay: ANIMATION_DELAY.MEDIUM,
                    }}
                    className="w-full md:w-1/2 flex flex-col items-start space-y-4 sm:space-y-6 md:pl-0 lg:pl-4"
                >
                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: ANIMATION_DURATION.MEDIUM,
                            ...SPRING_CONFIG.STIFF,
                            delay: ANIMATION_DELAY.MEDIUM,
                        }}
                        className="text-pink-400 font-mono text-sm sm:text-base"
                    >
                        Hi, my name is
                    </motion.p>
                    <motion.h1
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: ANIMATION_DURATION.MEDIUM,
                            ...SPRING_CONFIG.STIFF,
                            delay: ANIMATION_DELAY.LONG,
                        }}
                        className="text-4xl sm:text-5xl md:text-7xl font-bold text-white relative"
                    >
                        <motion.span
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.8,
                                ...SPRING_CONFIG.STIFF,
                                delay: 0.9,
                            }}
                            className="bg-gradient-to-r from-[#64FFDA] via-[#4FD1C5] to-[#38B2AC] bg-clip-text text-transparent"
                        >
                            Sai Reddy Ganapuram
                        </motion.span>
                    </motion.h1>
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: ANIMATION_DURATION.MEDIUM,
                            ...SPRING_CONFIG.STIFF,
                            delay: ANIMATION_DELAY.VERY_LONG,
                        }}
                        className="text-xl sm:text-2xl md:text-4xl font-semibold text-gray-400"
                    >
                        <span>I&apos;m a&nbsp;</span>
                        <Typewriter
                            options={{
                                strings: [
                                    'MERN Stack Developer',
                                    'Python Programmer',
                                    'DevOps Enthusiast',
                                ],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50,
                                delay: 50,
                            }}
                        />
                    </motion.div>
                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: ANIMATION_DURATION.MEDIUM,
                            ...SPRING_CONFIG.STIFF,
                            delay: 1.3,
                        }}
                        className="text-base sm:text-lg text-gray-400 max-w-lg"
                    >
                        Crafting scalable web solutions using cutting-edge technologies. I
                        build exceptional digital experiences that combine functionality
                        with elegant design.
                    </motion.p>
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: ANIMATION_DURATION.MEDIUM,
                            ...SPRING_CONFIG.STIFF,
                            delay: 1.5,
                        }}
                        className="flex space-x-4 pt-4"
                    >
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0 0 20px rgba(100, 255, 218, 0.3)',
                            }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollToSection('projects')}
                            className="relative bg-[#64FFDA] text-[#0A192F] font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded overflow-hidden group text-sm sm:text-base"
                            aria-label="View my projects"
                        >
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.7 }}
                                className="relative z-10"
                            >
                                View Projects
                            </motion.span>
                            <motion.div
                                initial={{ x: '-100%' }}
                                animate={{ x: '0%' }}
                                transition={{ delay: 1.7, duration: 0.5 }}
                                className="absolute inset-0 bg-gradient-to-r from-[#64FFDA] to-[#0A192F] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            ></motion.div>
                            <motion.div
                                initial={{ x: '100%' }}
                                animate={{ x: '0%' }}
                                transition={{ delay: 1.7, duration: 0.5 }}
                                className="absolute inset-0 bg-[#64FFDA] opacity-20 group-hover:opacity-0 transition-opacity duration-300"
                            ></motion.div>
                        </motion.button>
                    </motion.div>
                </motion.div>
                <motion.div
                    initial={{ x: 200, rotate: 5, opacity: 0 }}
                    animate={{ x: 0, rotate: 0, opacity: 1 }}
                    transition={{
                        duration: 1,
                        ...SPRING_CONFIG.SOFT,
                        delay: ANIMATION_DELAY.MEDIUM,
                    }}
                    className="w-full md:w-1/2 mt-10 md:mt-0 hidden md:block"
                >
                    <div
                        className="relative mt-10 sm:mt-20"
                        style={{
                            width: '100%',
                            maxWidth: '100%',
                            height: 'auto',
                            maxHeight: '900px',
                            minHeight: '700px',
                            margin: '0 auto',
                            position: 'relative',
                            overflow: 'hidden',
                            transform: 'scale(1)',
                            transformOrigin: 'center center',
                            marginRight: '0',
                            marginBottom: '20px',
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                duration: 1,
                                ...SPRING_CONFIG.STIFF,
                                delay: ANIMATION_DELAY.LONG,
                            }}
                            style={{
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                            }}
                        >
                            <ErrorBoundary fallbackMessage="Unable to load 3D animation">
                                <Suspense fallback={
                                    <div className="flex items-center justify-center h-full">
                                        <div className="text-[#64FFDA]" aria-live="polite">Loading 3D animation...</div>
                                    </div>
                                }>
                                    <HeroAnimation />
                                </Suspense>
                            </ErrorBoundary>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

HeroSection.propTypes = {
    particlesInit: PropTypes.func.isRequired,
    scrollToSection: PropTypes.func.isRequired,
};

export default HeroSection;
