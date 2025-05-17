import React from 'react';
import { motion } from 'framer-motion';
import CodeReviewer from '../../assets/aireviewer.png';

const AICodeReviewerProject = () => {
  return (
    <div className="bg-[#112240] rounded-lg overflow-hidden shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        {/* Project Image */}
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-[#64FFDA] to-[#0A192F] rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={CodeReviewer}
              alt="AI Code Reviewer"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Project Details */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-[#64FFDA]">AI Code Reviewer</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Overview</h4>
              <p className="text-gray-300">
                An intelligent code review system that analyzes code quality, suggests improvements, 
                and enforces best practices using machine learning algorithms. The system helps 
                developers write better code and maintain high standards across projects.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Key Features</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Automated code quality analysis</li>
                <li>Best practices enforcement</li>
                <li>Security vulnerability detection</li>
                <li>Performance optimization suggestions</li>
                <li>Code style consistency checks</li>
                <li>Integration with popular IDEs and CI/CD pipelines</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Machine Learning', 'AST Parser', 'Docker', 'GitHub API', 'VS Code Extension'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-[#0A192F] text-[#64FFDA] rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Technical Highlights</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Developed custom ML models for code pattern recognition</li>
                <li>Implemented AST-based code analysis for deep understanding</li>
                <li>Created automated suggestion system for code improvements</li>
                <li>Built real-time code review capabilities</li>
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

export default AICodeReviewerProject; 