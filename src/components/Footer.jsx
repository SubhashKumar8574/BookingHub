import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              BookingHub
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              A modern booking platform for discovering and booking amazing experiences.
              Built with React, Vite, and Tailwind CSS.
            </p>
          </div>

          {/* Creator Info */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1 mb-2">
              <span className="text-gray-600 dark:text-gray-400 text-sm">Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
              <span className="text-gray-600 dark:text-gray-400 text-sm">by</span>
            </div>
            <p className="text-gray-900 dark:text-white font-semibold">
              Subhash Kumar
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © {currentYear} All rights reserved
            </p>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
              Connect
            </h4>
            <div className="flex justify-center md:justify-end space-x-3">
              <a
                href="#"
                className="bg-gray-100 dark:bg-gray-700 p-2 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors duration-200 group"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4 text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400" />
              </a>
              <a
                href="#"
                className="bg-gray-100 dark:bg-gray-700 p-2 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors duration-200 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400" />
              </a>
              <a
                href="#"
                className="bg-gray-100 dark:bg-gray-700 p-2 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors duration-200 group"
                aria-label="Email"
              >
                <Mail className="h-4 w-4 text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-6 pt-6 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            This project showcases modern web development practices with responsive design and accessibility features.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;