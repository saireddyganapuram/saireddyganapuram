import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, SOCIAL_LINKS } from '../../constants/constants';

const ContactSection = ({ useIntersectionObserver, setToast }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Initialize EmailJS with public key
    useEffect(() => {
        if (EMAILJS_CONFIG.PUBLIC_KEY) {
            emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
            console.log('EmailJS initialized with public key');
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };

        // Check if EmailJS is configured
        if (!EMAILJS_CONFIG.PUBLIC_KEY || !EMAILJS_CONFIG.SERVICE_ID || !EMAILJS_CONFIG.TEMPLATE_ID) {
            console.error('EmailJS Configuration Missing:', {
                hasPublicKey: !!EMAILJS_CONFIG.PUBLIC_KEY,
                hasServiceId: !!EMAILJS_CONFIG.SERVICE_ID,
                hasTemplateId: !!EMAILJS_CONFIG.TEMPLATE_ID,
            });
            setToast({
                show: true,
                message: 'EmailJS is not configured. Please check your environment variables.',
                type: 'error',
            });
            setIsSubmitting(false);
            return;
        }

        console.log('Sending email via EmailJS...');
        console.log('Service ID:', EMAILJS_CONFIG.SERVICE_ID);
        console.log('Template ID:', EMAILJS_CONFIG.TEMPLATE_ID);

        try {
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
                to_name: 'Sai Reddy Ganapuram',
            };

            console.log('Template params:', templateParams);

            const response = await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                templateParams
            );

            console.log('EmailJS Success Response:', response);

            setToast({
                show: true,
                message: 'Message sent successfully! I will get back to you soon.',
                type: 'success',
            });
            e.target.reset();
        } catch (error) {
            console.error('EmailJS Error Details:', {
                message: error.message,
                text: error.text,
                status: error.status,
                fullError: error,
            });

            let errorMessage = 'Error sending message. Please try again later or contact me directly via email.';

            // Provide more specific error messages based on error type
            if (error.text) {
                if (error.text.includes('template')) {
                    errorMessage = 'Email template error. Please check your EmailJS template configuration.';
                } else if (error.text.includes('service')) {
                    errorMessage = 'Email service error. Please verify your service is active in EmailJS.';
                } else if (error.text.includes('public_key') || error.text.includes('user_id')) {
                    errorMessage = 'Invalid EmailJS credentials. Please check your Public Key.';
                }
            }

            setToast({
                show: true,
                message: errorMessage,
                type: 'error',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="py-12 sm:py-20 min-h-screen flex items-center relative z-10 px-4 sm:px-6 lg:px-8"
            aria-labelledby="contact-heading"
        >
            <div className="container mx-auto">
                <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-16 text-center">
                    <span className="text-[#64FFDA]">Get In</span> Touch
                </h2>
                <div
                    ref={useIntersectionObserver({ threshold: 0.2 })}
                    data-animate
                    className="max-w-3xl mx-auto bg-[#112240] p-6 sm:p-8 rounded-lg shadow-lg relative z-20"
                >
                    <p className="text-center text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
                        I&apos;m currently looking for new opportunities. Whether you have a
                        question or just want to say hi, I&apos;ll try my best to get back to
                        you!
                    </p>
                    <form
                        className="space-y-4 sm:space-y-6 relative z-30"
                        onSubmit={handleSubmit}
                        aria-label="Contact form"
                    >
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
                                    disabled={isSubmitting}
                                    style={{ pointerEvents: 'auto', position: 'relative', zIndex: 40 }}
                                    aria-required="true"
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
                                    disabled={isSubmitting}
                                    style={{ pointerEvents: 'auto', position: 'relative', zIndex: 40 }}
                                    aria-required="true"
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
                                disabled={isSubmitting}
                                style={{ pointerEvents: 'auto', position: 'relative', zIndex: 40 }}
                                aria-required="true"
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
                                disabled={isSubmitting}
                                style={{ pointerEvents: 'auto', position: 'relative', zIndex: 40 }}
                                aria-required="true"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-[#64FFDA] text-[#0A192F] font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded hover:opacity-90 transition-all !rounded-button whitespace-nowrap cursor-pointer text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                            style={{ pointerEvents: 'auto', position: 'relative', zIndex: 40 }}
                            disabled={isSubmitting}
                            aria-label={isSubmitting ? 'Sending message...' : 'Send message'}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                    <div className="mt-8 sm:mt-10 flex justify-center space-x-6 sm:space-x-8 relative z-30">
                        <a
                            href={SOCIAL_LINKS.GITHUB}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-[#64FFDA] transition-colors text-2xl sm:text-4xl !rounded-button whitespace-nowrap cursor-pointer"
                            title="GitHub"
                            style={{ pointerEvents: 'auto', position: 'relative', zIndex: 40 }}
                            aria-label="Visit my GitHub profile"
                        >
                            <i className="fab fa-github" aria-hidden="true"></i>
                        </a>
                        <a
                            href={SOCIAL_LINKS.LINKEDIN}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-[#64FFDA] transition-colors text-2xl sm:text-4xl !rounded-button whitespace-nowrap cursor-pointer"
                            title="LinkedIn"
                            style={{ pointerEvents: 'auto', position: 'relative', zIndex: 40 }}
                            aria-label="Visit my LinkedIn profile"
                        >
                            <i className="fab fa-linkedin" aria-hidden="true"></i>
                        </a>
                        <a
                            href={SOCIAL_LINKS.INSTAGRAM}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-[#64FFDA] transition-colors text-2xl sm:text-4xl !rounded-button whitespace-nowrap cursor-pointer"
                            title="Instagram"
                            style={{ pointerEvents: 'auto', position: 'relative', zIndex: 40 }}
                            aria-label="Visit my Instagram profile"
                        >
                            <i className="fab fa-instagram" aria-hidden="true"></i>
                        </a>
                        <a
                            href={SOCIAL_LINKS.EMAIL}
                            className="text-gray-400 hover:text-[#64FFDA] transition-colors text-2xl sm:text-4xl !rounded-button whitespace-nowrap cursor-pointer"
                            title="Email"
                            style={{ pointerEvents: 'auto', position: 'relative', zIndex: 40 }}
                            aria-label="Send me an email"
                        >
                            <i className="fas fa-envelope" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

ContactSection.propTypes = {
    useIntersectionObserver: PropTypes.func.isRequired,
    setToast: PropTypes.func.isRequired,
};

export default ContactSection;
