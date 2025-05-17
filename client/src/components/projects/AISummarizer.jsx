import React from 'react';
import { motion } from 'framer-motion';
import AISummarizer from '../../assets/aisummarizer.png';

const AISummarizerProject = () => {
  return (
    <div className="bg-[#112240] rounded-lg overflow-hidden shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        {/* Project Image */}
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-[#64FFDA] to-[#0A192F] rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={AISummarizer}
              alt="AI Summarizer"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Project Details */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-[#64FFDA]">AI Summarizer</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Overview</h4>
              <p className="text-gray-300">
                An advanced text summarization tool that uses natural language processing to generate 
                concise, accurate summaries while preserving key information. The system can handle 
                various types of content, from articles to research papers, and produce summaries 
                of different lengths.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Key Features</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Multi-document summarization</li>
                <li>Customizable summary length</li>
                <li>Key points extraction</li>
                <li>Multiple language support</li>
                <li>Citation and reference preservation</li>
                <li>API integration capabilities</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {['Python', 'NLP', 'Transformers', 'FastAPI', 'Docker', 'Redis'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-[#0A192F] text-[#64FFDA] rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Technical Implementation</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Implemented state-of-the-art transformer models for text understanding</li>
                <li>Developed custom algorithms for key information extraction</li>
                <li>Created efficient text processing pipeline for large documents</li>
                <li>Built scalable API for easy integration with other systems</li>
              </ul>
            </div>

            <div className="flex space-x-4 pt-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#64FFDA] text-[#0A192F] font-semibold px-6 py-3 rounded-lg flex items-center space-x-2"
              >
                <i className="fab fa-github"></i>
                <span>View Code</span>
              </motion.a>
              <motion.a
                href="#"
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
    </div>
  );
};

export default AISummarizerProject; 