import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Toast = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
          type === 'success' ? 'bg-[#64FFDA] text-[#0A192F]' : 'bg-red-500 text-white'
        }`}
      >
        <div className="flex items-center space-x-3">
          {type === 'success' ? (
            <i className="fas fa-check-circle text-xl"></i>
          ) : (
            <i className="fas fa-exclamation-circle text-xl"></i>
          )}
          <p className="font-medium">{message}</p>
          <button
            onClick={onClose}
            className="ml-4 hover:opacity-80 transition-opacity"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Toast; 