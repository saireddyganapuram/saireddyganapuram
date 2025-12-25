// Animation Constants
export const ANIMATION_DURATION = {
  FAST: 0.3,
  MEDIUM: 0.6,
  SLOW: 1.0,
  VERY_SLOW: 1.2,
};

export const ANIMATION_DELAY = {
  SHORT: 0.2,
  MEDIUM: 0.5,
  LONG: 0.7,
  VERY_LONG: 1.1,
};

export const SPRING_CONFIG = {
  STIFF: { type: 'spring', stiffness: 100 },
  SOFT: { type: 'spring', stiffness: 50 },
};

// Color Scheme
export const COLORS = {
  PRIMARY: '#64FFDA',
  SECONDARY: '#0A192F',
  BACKGROUND: '#0A192F',
  CARD_BG: '#112240',
  TEXT_PRIMARY: '#FFFFFF',
  TEXT_SECONDARY: '#64FFDA',
  TEXT_MUTED: '#8892B0',
  ACCENT: '#FF006E',
};

// 3D Animation Settings
export const HERO_ANIMATION = {
  EARTH_RADIUS: 2.2,
  CLOUD_RADIUS: 2.23,
  ATMOSPHERE_RADIUS: 2.3,
  SATELLITE_COUNT: 3,
  DEBRIS_COUNT: 20,
  ORBITAL_RINGS: 2,
  AUTO_ROTATE_SPEED: 0.5,
  FLOAT_SPEED: 2,
  ROTATION_INTENSITY: 0.5,
};

// Particle Settings
export const PARTICLE_CONFIG = {
  NUMBER: 50,
  DENSITY_AREA: 800,
  COLOR: '#64FFDA',
  OPACITY: 0.3,
  SIZE: 2,
  LINK_DISTANCE: 150,
  LINK_OPACITY: 0.2,
  MOVE_SPEED: 1,
};

// Intersection Observer Settings
export const OBSERVER_CONFIG = {
  threshold: 0.2,
  rootMargin: '0px',
};

// Breakpoints
export const BREAKPOINTS = {
  MOBILE: 640,
  TABLET: 768,
  DESKTOP: 1024,
  WIDE: 1280,
};

// Toast Settings
export const TOAST_DURATION = 5000;

// EmailJS Configuration (to be filled by user)
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
};

// Social Links
export const SOCIAL_LINKS = {
  GITHUB: 'https://github.com/saireddyganapuram',
  LINKEDIN: 'https://www.linkedin.com/in/saireddyganapuram',
  INSTAGRAM: 'https://instagram.com/sai_reddy__05',
  EMAIL: 'mailto:gsaireddy2005@gmail.com',
};

// Navigation Items
export const NAV_ITEMS = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
