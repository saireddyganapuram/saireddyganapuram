// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect, useRef } from "react";
import { Canvas} from "@react-three/fiber";
import { OrbitControls, Environment, Float, Stars, Text3D, Center } from "@react-three/drei";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import OrganDonationPlatform from "../assets/organ.png";
import AIagent from "../assets/aiagent.png";
import CodeReviewer from "../assets/aireviewer.png";
import AISummarizer from "../assets/aisummarizer.png";
import SaiReddy from "../assets/image1.png";
import { TextureLoader } from "three";
import * as THREE from "three";
import { earthTextures } from "../assets/textures";
import Toast from '../components/Toast';
import { projects } from '../data/projects';
import ProjectModal from '../components/ProjectModal';

// 3D Model Components
const OrganDonationModel = () => {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <meshStandardMaterial color="#64FFDA" metalness={0.5} roughness={0.2} />
      </mesh>
    </Float>
  );
};

const AIAgentModel = () => {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh>
        <octahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial
          color="#64FFDA"
          metalness={0.7}
          roughness={0.2}
          wireframe
        />
      </mesh>
    </Float>
  );
};

const CodeReviewModel = () => {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial color="#64FFDA" metalness={0.5} roughness={0.2} />
      </mesh>
    </Float>
  );
};

const SummarizerModel = () => {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#64FFDA" metalness={0.5} roughness={0.2} />
      </mesh>
    </Float>
  );
};

// Scene component for each project
const Scene = ({ Model }) => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Model />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
      <Environment preset="city" />
    </Canvas>
  );
};

// Tech Icons Component
const TechIcons = () => {
  const icons = [
    { icon: "fab fa-react", color: "#61DAFB" },
    { icon: "fab fa-python", color: "#3776AB" },
    { icon: "fab fa-node-js", color: "#339933" },
    { icon: "fas fa-database", color: "#47A248" },
  ];

  return (
    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className="w-12 h-12 rounded-full bg-[#112240] flex items-center justify-center shadow-lg"
          whileHover={{ scale: 1.1 }}
        >
          <i
            className={`${icon.icon} text-2xl`}
            style={{ color: icon.color }}
          ></i>
        </motion.div>
      ))}
    </div>
  );
};

// Enhanced Hero Animation Component
const HeroAnimation = () => {
  const [textures, setTextures] = useState({
    colorMap: null,
    normalMap: null,
    specularMap: null,
    cloudMap: null,
  });
  const [error, setError] = useState(false);
  const groupRef = useRef();
  const time = useRef(0);
  const containerRef = useRef(null);
  // Add state to control visibility when scrolling away
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const loadTextures = async () => {
      try {
        const textureLoader = new TextureLoader();

        const color = await textureLoader
          .loadAsync(earthTextures.color)
          .catch((err) => {
            console.error("Error loading color map:", err);
            return null;
          });

        const normal = await textureLoader
          .loadAsync(earthTextures.normal)
          .catch((err) => {
            console.error("Error loading normal map:", err);
            return null;
          });

        const specular = await textureLoader
          .loadAsync(earthTextures.specular)
          .catch((err) => {
            console.error("Error loading specular map:", err);
            return null;
          });

        const cloud = await textureLoader
          .loadAsync(earthTextures.clouds)
          .catch((err) => {
            console.error("Error loading cloud map:", err);
            return null;
          });

        if (color) {
          setTextures({
            colorMap: color,
            normalMap: normal,
            specularMap: specular,
            cloudMap: cloud,
          });
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Failed to load Earth textures:", err);
        setError(true);
      }
    };
    loadTextures();
  }, []);

  // Effect to set initial dimensions and handle resize
  useEffect(() => {
    // Function to set the correct dimensions
    const setDimensions = () => {
      if (containerRef.current) {
        // Calculate 70vh in pixels - but cap it at a maximum size
        const viewportHeight = window.innerHeight;
        const heightInPixels = Math.min(600, Math.max(500, viewportHeight * 0.6));

        // Set dimensions explicitly with strict constraints
        containerRef.current.style.height = `${heightInPixels}px`;
        containerRef.current.style.maxHeight = `${heightInPixels}px`;

        // Add additional constraints to prevent enlarging
        containerRef.current.style.transform = 'scale(1)';
        containerRef.current.style.transformOrigin = 'center center';
      }
    };

    // Set dimensions immediately
    setDimensions();

    // Also handle window resize
    window.addEventListener('resize', setDimensions);

    // Clean up
    return () => {
      window.removeEventListener('resize', setDimensions);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (groupRef.current) {
        const { clientX, clientY } = event;
        const x = (clientX / window.innerWidth) * 2 - 1;
        const y = -(clientY / window.innerHeight) * 2 + 1;

        groupRef.current.rotation.x = y * 0.2;
        groupRef.current.rotation.y = x * 0.2;
      }
    };

    const animate = () => {
      time.current += 0.01;
      if (groupRef.current) {
        groupRef.current.rotation.y = time.current * 0.2;
      }
      requestAnimationFrame(animate);
    };

    // Handle scroll to prevent animation from enlarging
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      if (!homeSection || !containerRef.current) return;

      const homeSectionRect = homeSection.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate a responsive size
      const maxHeight = Math.min(600, Math.max(500, viewportHeight * 0.6));

      // Check if we're scrolling away from the home section
      if (homeSectionRect.bottom < 0) {
        // If completely scrolled past the home section, hide the animation
        setIsVisible(false);
      } else {
        // Otherwise show it
        setIsVisible(true);

        // Apply strict size constraints regardless of scroll position
        // This ensures the animation never enlarges
        containerRef.current.style.height = `${maxHeight}px`;
        containerRef.current.style.maxHeight = `${maxHeight}px`;

        // Force scale to 1 to prevent any enlarging and maintain the 60px right/80px down offset
        containerRef.current.style.transform = 'scale(1) translate(60px, 80px)';
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    animate();

    // Initial call to set correct state
    handleScroll();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "600px", // Fixed height instead of vh units
        maxHeight: "600px",
        minHeight: "500px",
        position: "relative",
        margin: "0 auto",
        overflow: "hidden",
        visibility: isVisible ? "visible" : "hidden",
        transition: "height 0.3s ease-out, max-height 0.3s ease-out, transform 0.3s ease-out",
        transform: "scale(1) translate(60px, 80px)", // Move 60px right and 80px down
        transformOrigin: "center center",
        willChange: "transform, height" // Optimize for animations
      }}>
      <Canvas
        camera={{ position: [0, 0, 7], fov: 60 }}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
      >
        <ambientLight intensity={1.2} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <spotLight
          position={[-10, -10, -10]}
          angle={0.15}
          penumbra={1}
          intensity={2}
        />

        {/* Stars Background */}
        <Stars
          radius={300}
          depth={150}
          count={12000}
          factor={8}
          saturation={0.5}
          fade
          speed={1}
          color="#FFFFFF"
          size={2}
        />

        <group ref={groupRef} position={[0, 0, 0]}>
          {/* Earth */}
          <mesh>
            <sphereGeometry args={[2.2, 64, 64]} />
            {error || !textures.colorMap ? (
              <meshPhongMaterial color="#64FFDA" shininess={20} />
            ) : (
              <meshStandardMaterial
                map={textures.colorMap}
                normalMap={textures.normalMap}
                normalScale={[0.5, 0.5]}
                roughnessMap={textures.specularMap}
                roughness={0.5}
                metalness={0.2}
                envMapIntensity={1.5}
              />
            )}
          </mesh>

          {/* Clouds */}
          {!error && textures.cloudMap && (
            <mesh>
              <sphereGeometry args={[2.23, 64, 64]} />
              <meshStandardMaterial
                map={textures.cloudMap}
                transparent
                opacity={0.5}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
              />
            </mesh>
          )}

          {/* Atmosphere Glow */}
          <mesh>
            <sphereGeometry args={[2.3, 64, 64]} />
            <meshStandardMaterial
              color="#FFFFFF"
              transparent
              opacity={0.15}
              side={THREE.BackSide}
              blending={THREE.AdditiveBlending}
            />
          </mesh>

          {/* Orbiting Satellites */}
          {[...Array(3)].map((_, i) => (
            <mesh
              key={i}
              position={[
                Math.sin((i * Math.PI) / 1.5 + time.current) * 3.5,
                Math.cos((i * Math.PI) / 1.5 + time.current) * 3.5,
                Math.sin((i * Math.PI) / 1.5 + time.current) *
                  Math.cos((i * Math.PI) / 1.5 + time.current) *
                  3.5,
              ]}
              rotation={[time.current * 2, time.current * 2, 0]}
            >
              <octahedronGeometry args={[0.12, 0]} />
              <meshStandardMaterial
                color="#FFFFFF"
                metalness={0.8}
                roughness={0.2}
                transparent
                opacity={0.9}
                emissive="#FFFFFF"
                emissiveIntensity={0.5}
              />
            </mesh>
          ))}

          {/* Orbital Rings */}
          {[...Array(2)].map((_, i) => (
            <mesh key={i} rotation={[(i * Math.PI) / 2, 0, time.current]}>
              <torusGeometry args={[3.2, 0.02, 32, 100]} />
              <meshStandardMaterial
                color="#FFFFFF"
                metalness={0.6}
                roughness={0.3}
                transparent
                opacity={0.4}
                emissive="#FFFFFF"
                emissiveIntensity={0.3}
              />
            </mesh>
          ))}
        </group>

        {/* Space Debris */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          {[...Array(20)].map((_, i) => (
            <mesh
              key={i}
              position={[
                Math.sin(i * 0.5 + time.current) * 5,
                Math.cos(i * 0.5 + time.current) * 5,
                Math.sin(i * 0.3 + time.current) *
                  Math.cos(i * 0.5 + time.current) *
                  5,
              ]}
            >
              <tetrahedronGeometry args={[0.06, 0]} />
              <meshStandardMaterial
                color="#FFFFFF"
                metalness={0.8}
                roughness={0.2}
                transparent
                opacity={0.6}
                emissive="#FFFFFF"
                emissiveIntensity={0.4}
              />
            </mesh>
          ))}
        </Float>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
};

// Note: ParticleBackground component was removed as it's not being used
// The particles are directly implemented in the Home component

const Home = () => {
  const useIntersectionObserver = (options = {}) => {
    const elementRef = useRef(null);
    useEffect(() => {
      if (!elementRef.current) return;

      // Store a reference to the current element to avoid the React warning
      const currentElement = elementRef.current;

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          currentElement?.classList.add("animate-in");
        }
      }, options);

      observer.observe(currentElement);

      return () => {
        // Use the stored reference in the cleanup function
        observer.unobserve(currentElement);
      };
    }, [options]);

    return elementRef;
  };
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [selectedProject, setSelectedProject] = useState(null);

  const particlesInit = async (engine) => {
    try {
      await loadFull(engine);
    } catch (error) {
      console.error("Error initializing particles:", error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 100;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id") || "";
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

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
      <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-md z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-[#64FFDA]">
            <span className="text-white"></span>
          </a>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {[
              "home",
              "about",
              "skills",
              "projects",
              "education",
              "contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize !rounded-button whitespace-nowrap cursor-pointer hover:text-pink-400 transition-colors ${
                  activeSection === item ? "text-pink-400" : "text-gray-300"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-200 focus:outline-none !rounded-button whitespace-nowrap cursor-pointer"
            onClick={toggleMenu}
          >
            <i
              className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}
            ></i>
          </button>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/50 backdrop-blur-lg absolute w-full py-4 shadow-lg border-t border-white/10">
            <div className="flex flex-col space-y-4 px-6">
              {[
                "home",
                "about",
                "skills",
                "projects",
                "education",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize text-left py-2 !rounded-button whitespace-nowrap cursor-pointer hover:text-[#64FFDA] transition-colors ${
                    activeSection === item ? "text-[#64FFDA]" : "text-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center pt-20 relative overflow-hidden px-4 sm:px-6 lg:px-8"
        style={{
          position: "relative",
          zIndex: 1,
          isolation: "isolate"
        }}
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            particles: {
              number: { value: 50, density: { enable: true, value_area: 800 } },
              color: { value: "#64FFDA" },
              opacity: { value: 0.3 },
              size: { value: 2 },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#64FFDA",
                opacity: 0.2,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: { enable: true, mode: "grab" },
                onclick: { enable: true, mode: "push" },
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
        />

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1.2,
            type: "spring",
            stiffness: 100,
          }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center relative z-10"
        >
          <motion.div
            initial={{ x: -200, rotate: -5, opacity: 0 }}
            animate={{ x: 0, rotate: 0, opacity: 1 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 50,
              delay: 0.3,
            }}
            className="w-full md:w-1/2 flex flex-col items-start space-y-4 sm:space-y-6 md:pl-8 lg:pl-12"
          >
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 100,
                delay: 0.5,
              }}
              className="text-pink-400 font-mono text-sm sm:text-base"
            >
              Hi, my name is
            </motion.p>
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 100,
                delay: 0.7,
              }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-white relative"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
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
                duration: 0.6,
                type: "spring",
                stiffness: 100,
                delay: 1.1,
              }}
              className="text-2xl sm:text-3xl md:text-5xl font-semibold text-gray-400"
            >
              <span>I'm a&nbsp;</span>
              <Typewriter
                options={{
                  strings: [
                    "MERN Stack Developer",
                    "Python Programmer",
                    "DevOps Enthusiast",
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
                duration: 0.6,
                type: "spring",
                stiffness: 100,
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
                duration: 0.6,
                type: "spring",
                stiffness: 100,
                delay: 1.5,
              }}
              className="flex space-x-4 pt-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(100, 255, 218, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("projects")}
                className="relative bg-[#64FFDA] text-[#0A192F] font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded overflow-hidden group text-sm sm:text-base"
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
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ delay: 1.7, duration: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-r from-[#64FFDA] to-[#0A192F] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></motion.div>
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: "0%" }}
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
              type: "spring",
              stiffness: 50,
              delay: 0.5,
            }}
            className="w-full md:w-1/2 mt-10 md:mt-0 hidden md:block"
          >
            <div
              className="relative mt-10 sm:mt-20"
              style={{
                width: "100%",
                maxWidth: "100%",
                height: "auto",
                maxHeight: "900px",
                minHeight: "700px",
                margin: "0 auto",
                position: "relative",
                overflow: "hidden",
                transform: "scale(1)",
                transformOrigin: "center center",
                marginRight: "0",
                marginBottom: "20px"
              }}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 1,
                  type: "spring",
                  stiffness: 100,
                  delay: 0.7,
                }}
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0
                }}
              >
                <HeroAnimation />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>
      {/* About Section */}
      <section id="about" className="py-12 sm:py-20 min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-16 text-center">
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
                    alt="Sai Reddy Ganapuram"
                    className="w-full h-auto object-cover object-top"
                  />
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">
                Hi, I'm Sai Reddy Ganapuram — I am a motivated and enthusiastic B.Tech student with a strong foundation in Information Technology, specializing in the MERN stack and DSA in Python. My learning journey has helped me build a solid understanding of both development principles and practical implementation.
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
      {/* Skills Section */}
      <section
        id="skills"
        className="py-12 sm:py-20 bg-black/30 min-h-screen flex items-center backdrop-blur-sm px-4 sm:px-6 lg:px-8"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-16 text-center">
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
                <i className="fas fa-code text-[#64FFDA] mr-3"></i>
                Frontend
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { name: "React", icon: "ri-reactjs-fill" },
                  { name: "JavaScript", icon: "ri-javascript-line" },
                  { name: "HTML5", icon: "ri-html5-fill" },
                  { name: "CSS3", icon: "ri-css3-fill" },
                  { name: "Tailwind CSS", icon: "ri-tailwind-css-fill" },
                  { name: "Next.js", icon: "ri-nextjs-line" },
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center p-2 sm:p-3 bg-[#1D2D50] rounded-lg hover:bg-[#233554] transition-all transform hover:scale-105 cursor-pointer text-sm sm:text-base"
                  >
                    <i
                      className={`${skill.icon} text-[#64FFDA] text-lg sm:text-xl mr-2 sm:mr-3`}
                    ></i>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Backend Skills */}
            <div className="bg-black/40 p-6 sm:p-8 rounded-lg shadow-lg backdrop-blur-sm border border-white/10">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white flex items-center">
                <i className="fas fa-server text-[#64FFDA] mr-3"></i>
                Backend
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { name: "Node.js", icon: "ri-nodejs-line" },
                  { name: "Express.js", icon: "ri-server-fill" },
                  { name: "MongoDB", icon: "ri-database-2-fill" },
                  { name: "Python", icon: "fab fa-python" },
                  { name: "REST API", icon: "ri-arrow-left-right-line" },
                  { name: "SQL", icon: "ri-table-line" },
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center p-2 sm:p-3 bg-[#1D2D50] rounded-lg hover:bg-[#233554] transition-all transform hover:scale-105 cursor-pointer text-sm sm:text-base"
                  >
                    <i
                      className={`${skill.icon} text-[#64FFDA] text-lg sm:text-xl mr-2 sm:mr-3`}
                    ></i>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Tools & Others */}
            <div className="bg-black/40 p-6 sm:p-8 rounded-lg shadow-lg backdrop-blur-sm border border-white/10">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white flex items-center">
                <i className="fas fa-tools text-[#64FFDA] mr-3"></i>
                Tools & Others
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { name: "Git", icon: "ri-git-merge-fill" },
                  { name: "GitHub", icon: "ri-github-fill" },
                  { name: "Linux", icon: "fas fa-linux" },
                  { name: "Docker", icon: "fab fa-docker" },
                  { name: "AWS", icon: "fab fa-aws" },
                  { name: "CI/CD", icon: "ri-loop-right-fill" },
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center p-2 sm:p-3 bg-[#1D2D50] rounded-lg hover:bg-[#233554] transition-all transform hover:scale-105 cursor-pointer text-sm sm:text-base"
                  >
                    <i
                      className={`${skill.icon} text-[#64FFDA] text-lg sm:text-xl mr-2 sm:mr-3`}
                    ></i>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-20 min-h-screen flex items-center relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-16 text-center">
            <span className="text-[#64FFDA]">Featured</span> Projects
          </h2>
          <div
            ref={useIntersectionObserver({ threshold: 0.2 })}
            data-animate
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto relative z-20"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#112240] rounded-lg overflow-hidden cursor-pointer relative z-30"
                onClick={() => handleProjectClick(project)}
                style={{ pointerEvents: "auto" }}
              >
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#64FFDA] to-[#0A192F] rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={project.image}
                      alt={project.title}
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
      {/* Education Section */}
      <section
        id="education"
        className="py-12 sm:py-20 bg-[#112240] min-h-screen flex items-center px-4 sm:px-6 lg:px-8"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-16 text-center">
            <span className="text-[#64FFDA]">Education</span> & Certifications
          </h2>
          <div
            ref={useIntersectionObserver({ threshold: 0.2 })}
            data-animate
            className="max-w-3xl mx-auto"
          >
            {/* Education Timeline */}
            <div className="space-y-8 sm:space-y-12">
              {/* B.Tech */}
              <div className="relative pl-6 sm:pl-8 border-l-2 border-[#64FFDA]">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#64FFDA]"></div>
                <div className="bg-[#0A192F] p-4 sm:p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Bachelor of Technology in Information Technology
                  </h3>
                  <p className="text-[#64FFDA] mb-2">Malla Reddy Engineering College</p>
                  <p className="text-gray-400 mb-4">2023 - 2027</p>
                  <p className="text-sm sm:text-base text-gray-300">
                    Currently pursuing B.Tech in Information Technology.
                  </p>
                </div>
              </div>

              {/* Intermediate */}
              <div className="relative pl-6 sm:pl-8 border-l-2 border-[#64FFDA]">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#64FFDA]"></div>
                <div className="bg-[#0A192F] p-4 sm:p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Intermediate Education (MPC)
                  </h3>
                  <p className="text-[#64FFDA] mb-2">Telangana State Residential School & Junior College</p>
                  <p className="text-gray-400 mb-4">2021 - 2023</p>
                  <p className="text-sm sm:text-base text-gray-300">
                    Completed intermediate education with Mathematics, Physics, and Chemistry.
                  </p>
                </div>
              </div>

              {/* 10th Class */}
              <div className="relative pl-6 sm:pl-8 border-l-2 border-[#64FFDA]">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#64FFDA]"></div>
                <div className="bg-[#0A192F] p-4 sm:p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Secondary School Certificate (SSC)
                  </h3>
                  <p className="text-[#64FFDA] mb-2">Zilla Parishath High School</p>
                  <p className="text-gray-400 mb-4">2020 - 2021</p>
                  <p className="text-sm sm:text-base text-gray-300">
                    Completed 10th standard with distinction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-20 min-h-screen flex items-center relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-16 text-center">
            <span className="text-[#64FFDA]">Get In</span> Touch
          </h2>
          <div
            ref={useIntersectionObserver({ threshold: 0.2 })}
            data-animate
            className="max-w-3xl mx-auto bg-[#112240] p-6 sm:p-8 rounded-lg shadow-lg relative z-20"
          >
            <p className="text-center text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
              I'm currently looking for new opportunities. Whether you have a
              question or just want to say hi, I'll try my best to get back to
              you!
            </p>
            <form className="space-y-4 sm:space-y-6 relative z-30" onSubmit={async (e) => {
              e.preventDefault();
              const formData = {
                name: e.target.name.value,
                email: e.target.email.value,
                subject: e.target.subject.value,
                message: e.target.message.value
              };

              try {
                const response = await fetch('https://saireddyganapuram.onrender.com/api/contact', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(formData),
                });

                const data = await response.json();

                if (response.ok) {
                  setToast({
                    show: true,
                    message: 'Message sent successfully! I will get back to you soon.',
                    type: 'success'
                  });
                  e.target.reset();
                } else {
                  setToast({
                    show: true,
                    message: data.message || 'Error sending message. Please try again.',
                    type: 'error'
                  });
                }
              } catch (error) {
                console.error('Error:', error);
                setToast({
                  show: true,
                  message: 'Error sending message. Please try again later.',
                  type: 'error'
                });
              }
            }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 text-sm sm:text-base">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-[#0A192F] text-gray-300 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:border-[#64FFDA] transition-colors"
                    placeholder="Your Name"
                    required
                    style={{ pointerEvents: "auto", position: "relative", zIndex: 40 }}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 text-sm sm:text-base">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-[#0A192F] text-gray-300 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:border-[#64FFDA] transition-colors"
                    placeholder="Your Email"
                    required
                    style={{ pointerEvents: "auto", position: "relative", zIndex: 40 }}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2 text-sm sm:text-base">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full bg-[#0A192F] text-gray-300 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:border-[#64FFDA] transition-colors"
                  placeholder="Subject"
                  required
                  style={{ pointerEvents: "auto", position: "relative", zIndex: 40 }}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 text-sm sm:text-base">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-[#0A192F] text-gray-300 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:border-[#64FFDA] transition-colors"
                  placeholder="Your Message"
                  required
                  style={{ pointerEvents: "auto", position: "relative", zIndex: 40 }}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#64FFDA] text-[#0A192F] font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded hover:opacity-90 transition-all !rounded-button whitespace-nowrap cursor-pointer text-sm sm:text-base"
                style={{ pointerEvents: "auto", position: "relative", zIndex: 40 }}
              >
                Send Message
              </button>
            </form>
            <div className="mt-8 sm:mt-10 flex justify-center space-x-6 sm:space-x-8 relative z-30">
              <a
                href="https://github.com/saireddyganapuram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#64FFDA] transition-colors text-2xl sm:text-4xl !rounded-button whitespace-nowrap cursor-pointer"
                title="GitHub"
                style={{ pointerEvents: "auto", position: "relative", zIndex: 40 }}
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/saireddyganapuram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#64FFDA] transition-colors text-2xl sm:text-4xl !rounded-button whitespace-nowrap cursor-pointer"
                title="LinkedIn"
                style={{ pointerEvents: "auto", position: "relative", zIndex: 40 }}
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://instagram.com/sai_reddy__05"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#64FFDA] transition-colors text-2xl sm:text-4xl !rounded-button whitespace-nowrap cursor-pointer"
                title="Instagram"
                style={{ pointerEvents: "auto", position: "relative", zIndex: 40 }}
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="mailto:gsaireddy2005@gmail.com"
                className="text-gray-400 hover:text-[#64FFDA] transition-colors text-2xl sm:text-4xl !rounded-button whitespace-nowrap cursor-pointer"
                title="Email"
                style={{ pointerEvents: "auto", position: "relative", zIndex: 40 }}
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Toast Notification */}
      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ ...toast, show: false })}
        />
      )}
      {/* Footer */}
      <footer className="bg-[#0A192F] py-6 sm:py-8 relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs sm:text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Sai Reddy Ganapuram. All rights
              reserved.
            </p>
            <div className="flex items-center space-x-4 relative z-20">
              <a
                href="https://github.com/saireddyganapuram"
                className="text-gray-400 hover:text-[#64FFDA] transition-colors text-xs sm:text-sm !rounded-button whitespace-nowrap cursor-pointer"
                style={{ pointerEvents: "auto", position: "relative", zIndex: 30 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-github-fill mr-2"></i>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/saireddyganapuram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#64FFDA] transition-colors text-xs sm:text-sm !rounded-button whitespace-nowrap cursor-pointer"
                style={{ pointerEvents: "auto", position: "relative", zIndex: 30 }}
              >
                <i className="ri-linkedin-box-fill mr-2"></i>
                LinkedIn
              </a>
              <a
                href="mailto:gsaireddy2005@gmail.com"
                className="text-gray-400 hover:text-[#64FFDA] transition-colors text-xs sm:text-sm !rounded-button whitespace-nowrap cursor-pointer"
                style={{ pointerEvents: "auto", position: "relative", zIndex: 30 }}
              >
                <i className="ri-mail-fill mr-2"></i>
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </div>
  );
};

export default Home;
