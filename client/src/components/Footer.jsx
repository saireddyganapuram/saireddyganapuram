import React from 'react';
import { SOCIAL_LINKS } from '../constants/constants';

const Footer = () => {
    return (
        <footer
            className="bg-[#0A192F] py-6 sm:py-8 relative z-10 px-4 sm:px-6 lg:px-8"
            role="contentinfo"
        >
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-xs sm:text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} Sai Reddy Ganapuram. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-4 relative z-20">
                        <a
                            href={SOCIAL_LINKS.GITHUB}
                            className="text-gray-400 hover:text-[#64FFDA] transition-colors text-xs sm:text-sm !rounded-button whitespace-nowrap cursor-pointer"
                            style={{ pointerEvents: 'auto', position: 'relative', zIndex: 30 }}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit GitHub profile"
                        >
                            <i className="ri-github-fill mr-2" aria-hidden="true"></i>
                            GitHub
                        </a>
                        <a
                            href={SOCIAL_LINKS.LINKEDIN}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-[#64FFDA] transition-colors text-xs sm:text-sm !rounded-button whitespace-nowrap cursor-pointer"
                            style={{ pointerEvents: 'auto', position: 'relative', zIndex: 30 }}
                            aria-label="Visit LinkedIn profile"
                        >
                            <i className="ri-linkedin-box-fill mr-2" aria-hidden="true"></i>
                            LinkedIn
                        </a>
                        <a
                            href={SOCIAL_LINKS.EMAIL}
                            className="text-gray-400 hover:text-[#64FFDA] transition-colors text-xs sm:text-sm !rounded-button whitespace-nowrap cursor-pointer"
                            style={{ pointerEvents: 'auto', position: 'relative', zIndex: 30 }}
                            aria-label="Send email"
                        >
                            <i className="ri-mail-fill mr-2" aria-hidden="true"></i>
                            Email
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
