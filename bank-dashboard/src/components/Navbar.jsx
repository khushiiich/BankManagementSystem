import React from 'react';
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingLeft: '280px' }}>
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                🏦 Bank Management System
              </h1>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <span className="text-2xl">☀️</span>
              ) : (
                <span className="text-2xl">🌙</span>
              )}
            </button>
            
            {/* Profile Icon */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-indigo-600 dark:bg-indigo-500 flex items-center justify-center text-white font-semibold">
                A
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium">Admin</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;