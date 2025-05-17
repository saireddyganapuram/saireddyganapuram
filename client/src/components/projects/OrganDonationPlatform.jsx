import React from 'react';
import { motion } from 'framer-motion';
import OrganDonationPlatform from '../../assets/organ.png';

const OrganDonationPlatformProject = () => {
  return (
    <div className="bg-[#112240] rounded-lg overflow-hidden shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        {/* Project Image */}
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-[#64FFDA] to-[#0A192F] rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={OrganDonationPlatform}
              alt="Organ Donation Platform"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Project Details */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-[#64FFDA]">Organ Donation Platform</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Overview</h4>
              <p className="text-gray-300">
                A comprehensive platform connecting organ donors and recipients, featuring real-time matching algorithms, 
                medical data management, and secure communication channels. The platform aims to streamline the organ 
                donation process and save more lives.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Key Features</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Real-time donor-recipient matching system</li>
                <li>Secure medical data management</li>
                <li>Automated notification system</li>
                <li>Hospital integration capabilities</li>
                <li>Emergency response system</li>
                <li>Donor-recipient communication platform</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io', 'AWS'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-[#0A192F] text-[#64FFDA] rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Challenges & Solutions</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Implemented real-time matching algorithm for efficient donor-recipient pairing</li>
                <li>Developed secure data encryption for sensitive medical information</li>
                <li>Created automated notification system for emergency cases</li>
                <li>Built scalable architecture to handle high traffic during emergencies</li>
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

export default OrganDonationPlatformProject; 