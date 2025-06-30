import OrganDonationPlatform from '../assets/organ.png';
import AIagent from '../assets/aiagent.png';
import CodeReviewer from '../assets/aireviewer.png';
import AISummarizer from '../assets/aisummarizer.png';

export const projects = [
  {
    id: 1,
    title: 'Organ Donation Platform',
    image: OrganDonationPlatform,
    overview: 'A web-based system that connects organ donors and recipients with features like real-time matching, secure data management, and hospital integration. It aims to streamline the donation process and improve emergency response efficiency.',
    features: [
      'Donor and recipient registration with Aadhaar verification',
      'Real-time organ matching and availability tracking',
      'Patient form with medical report upload',
      'OTP-based secure login',
      'Integration with hospitals and NGOs',
      'Automated notifications and history tracking',
      'Organ search with filters',
      'FAQ and help section'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB', 'Express.js'],
    implementation: [
      'Built using the MERN stack, the platform uses Twilio for OTP-based login and JWT for session management. Patient data and organ records are securely stored in MongoDB. The system includes dynamic forms, file uploads, and a real-time organ search feature that filters data from hospitals and NGOs. It’s designed to be scalable and secure for broader institutional adoption.'
    ],
    githubLink: 'https://github.com/saireddyganapuram/organ-donation',
    demoLink: '#'
  },
  {
    id: 2,
    title: 'AI Agent',
    image: AIagent,
    overview: 'An AI-powered tool that generates production-ready Node.js and Express.js server code with ES6 syntax from natural language prompts. It enables instant prototyping by running the generated code in an embedded web container with a clean, VS Code-inspired interface.',
    features: [
      'Generates multi-file Express server projects (app.js, package.json, etc.)',
      'Supports ES6 import/export syntax',
      'Executes code immediately within a secure web container',
      'Real-time feedback with run and error outputs',
      'User-friendly, familiar UI for easy interaction',
      'Integration with various APIs and services'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Socket.io','Gemini API'],
    implementation: [
      'Built with the MERN stack and integrated with Gemini API for advanced natural language processing, this project translates developer prompts into fully functional backend code. It dynamically creates server files, runs them live in an embedded container, and presents the output in a clean, VS Code-style interface. This system streamlines backend development by enabling fast prototyping and testing without manual setup.'
    ],
    githubLink: 'https://github.com/saireddyganapuram/ai_agent',
    demoLink: '#'
  },
  {
    id: 3,
    title: 'AI Code Reviewer',
    image: CodeReviewer,
    overview: 'An intelligent code review system that analyzes code quality, suggests improvements, and enforces best practices using machine learning algorithms. The system helps developers write better code and maintain high standards across projects.',
    features: [
      'Automated code quality analysis',
      'Best practices enforcement',
      'Security vulnerability detection',
      'Performance optimization suggestions',
      'Code style consistency checks',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Gemini API'],
    implementation: [
      'Developed custom ML models for code pattern recognition',
      'Implemented AST-based code analysis for deep understanding',
      'Created automated suggestion system for code improvements',
      'Built real-time code review capabilities'
    ],
    githubLink: 'https://github.com/saireddyganapuram/AI_code_reviewer',
    demoLink: '#'
  },
  {
    id: 4,
    title: 'AI Summarizer',
    image: AISummarizer,
    overview: 'An AI-powered platform that generates concise summaries, short notes, flashcards, quiz questions, course recommendations, and YouTube links from any text or document. It also includes a chatbot to answer user doubts based on the generated content, making it a comprehensive study assistant.',
    features: [
      'Generate summaries and short notes',
      'Create flashcards and quiz questions automatically',
      'Recommend related courses and YouTube videos',
      'Multi-document and multi-language support',
      'Interactive chatbot for content-based doubt resolution',
      'API integration for easy access'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Gemini API'],
    implementation: [
      'Built on the MERN stack with Gemini API integration, this platform uses advanced NLP and transformer models to extract key information and generate various study materials. It offers a responsive frontend and a scalable backend API. The integrated chatbot uses context-aware NLP to answer questions based on generated content, enhancing user learning and engagement.'
    ],
    githubLink: 'https://github.com/saireddyganapuram/ai_summarizer',
    demoLink: '#'
  }
]; 