import React from "react";
import { Sun, Moon, Bell, User, Search } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Header = ({ toggleSidebar }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-40 transition-colors duration-300">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left Section */}
        <div className="flex items-center space-x-4 flex-1">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleSidebar}
            className="lg:hidden text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div className="relative w-full">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Dashboard Attendance
          </h1>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Option */}
          <select className="cursor-pointer rounded-md border border-[#ddd] bg-white px-4 py-2 text-sm text-[#666]">
            <option>-- All Organization--</option>
          </select>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* User Profile */}
          <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
