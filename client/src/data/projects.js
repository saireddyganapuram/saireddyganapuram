import OrganDonationPlatform from '../assets/organ.png';
import AIagent from '../assets/aiagent.png';
import CodeReviewer from '../assets/aireviewer.png';
import AISummarizer from '../assets/aisummarizer.png';

export const projects = [
  {
    id: 1,
    title: 'Organ Donation Platform',
    image: OrganDonationPlatform,
    overview: 'A comprehensive platform connecting organ donors and recipients, featuring real-time matching algorithms, medical data management, and secure communication channels. The platform aims to streamline the organ donation process and save more lives.',
    features: [
      'Real-time donor-recipient matching system',
      'Secure medical data management',
      'Automated notification system',
      'Hospital integration capabilities',
      'Emergency response system',
      'Donor-recipient communication platform'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB', 'Express.js'],
    implementation: [
      'Implemented real-time matching algorithm for efficient donor-recipient pairing',
      'Developed secure data encryption for sensitive medical information',
      'Created automated notification system for emergency cases',
      'Built scalable architecture to handle high traffic during emergencies'
    ],
    githubLink: 'https://github.com/saireddyganapuram/organ-donation',
    demoLink: '#'
  },
  {
    id: 2,
    title: 'AI Agent',
    image: AIagent,
    overview: 'An intelligent AI agent capable of understanding natural language, automating tasks, and providing context-aware responses using advanced language models. The agent can assist users with various tasks, from simple queries to complex problem-solving.',
    features: [
      'Natural Language Processing (NLP) capabilities',
      'Context-aware conversation management',
      'Task automation and scheduling',
      'Multi-modal interaction (text, voice, image)',
      'Learning and adaptation capabilities',
      'Integration with various APIs and services'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Socket.io','Gemini API'],
    implementation: [
      'Implemented advanced NLP models for natural language understanding',
      'Developed context management system for maintaining conversation state',
      'Created modular architecture for easy integration of new capabilities',
      'Built robust error handling and fallback mechanisms'
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
      'Integration with popular IDEs and CI/CD pipelines'
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
    overview: 'An advanced text summarization tool that uses natural language processing to generate concise, accurate summaries while preserving key information. The system can handle various types of content, from articles to research papers, and produce summaries of different lengths.',
    features: [
      'Multi-document summarization',
      'Customizable summary length',
      'Key points extraction',
      'Multiple language support',
      'Citation and reference preservation',
      'API integration capabilities'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Gemini API'],
    implementation: [
      'Implemented state-of-the-art transformer models for text understanding',
      'Developed custom algorithms for key information extraction',
      'Created efficient text processing pipeline for large documents',
      'Built scalable API for easy integration with other systems'
    ],
    githubLink: 'https://github.com/saireddyganapuram/ai_summarizer',
    demoLink: '#'
  }
]; 