import React from 'react';
import { Plus, Calendar } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ isDark, toggleTheme, onAddCard }) => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="bg-purple-600 p-2 rounded-lg group-hover:bg-purple-700 transition-colors duration-200">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
              BookingHub
            </h1>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-4">
            {/* Add Card Button */}
            <button
              onClick={onAddCard}
              className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-200 dark:hover:shadow-purple-900/50 active:scale-95"
            >
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">Add Card</span>
            </button>

            {/* Theme Toggle */}
            <div className="relative">
              <ThemeToggle isDark={isDark} toggle={toggleTheme} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;