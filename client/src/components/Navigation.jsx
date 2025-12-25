import React from 'react';
import PropTypes from 'prop-types';
import { NAV_ITEMS } from '../constants/constants';

const Navigation = ({ isMenuOpen, activeSection, toggleMenu, scrollToSection }) => {
    return (
        <nav
            className="fixed top-0 w-full bg-black/30 backdrop-blur-md z-50 border-b border-white/10"
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a
                    href="#home"
                    className="text-2xl font-bold text-[#64FFDA]"
                    aria-label="Go to home section"
                >
                    <span className="text-white"></span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex justify-evenly flex-1">
                    {NAV_ITEMS.map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item)}
                            className={`capitalize px-4 py-2 !rounded-button whitespace-nowrap cursor-pointer hover:text-pink-400 transition-colors ${activeSection === item ? 'text-pink-400' : 'text-gray-300'
                                }`}
                            aria-label={`Navigate to ${item} section`}
                            aria-current={activeSection === item ? 'page' : undefined}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-200 focus:outline-none !rounded-button whitespace-nowrap cursor-pointer"
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-menu"
                >
                    <i
                        className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}
                        aria-hidden="true"
                    ></i>
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div
                    id="mobile-menu"
                    className="md:hidden bg-black/50 backdrop-blur-lg absolute w-full py-4 shadow-lg border-t border-white/10"
                    role="menu"
                >
                    <div className="flex flex-col space-y-4 px-6">
                        {NAV_ITEMS.map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className={`capitalize text-left py-2 !rounded-button whitespace-nowrap cursor-pointer hover:text-[#64FFDA] transition-colors ${activeSection === item ? 'text-[#64FFDA]' : 'text-gray-300'
                                    }`}
                                role="menuitem"
                                aria-label={`Navigate to ${item} section`}
                                aria-current={activeSection === item ? 'page' : undefined}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

Navigation.propTypes = {
    isMenuOpen: PropTypes.bool.isRequired,
    activeSection: PropTypes.string.isRequired,
    toggleMenu: PropTypes.func.isRequired,
    scrollToSection: PropTypes.func.isRequired,
};

export default Navigation;
