import React from "react";
import {
  Home,
  BarChart3,
  ShoppingCart,
  Users,
  Settings,
  FileText,
  TrendingUp,
  Package,
  X,
} from "lucide-react";

const SideBar = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { icon: Home, active: true },
    { icon: BarChart3, active: false },
    { icon: ShoppingCart, active: false },
    { icon: TrendingUp, active: false },
    { icon: Users, active: false },
    { icon: Package, active: false },
    { icon: FileText, active: false },
    { icon: Settings, active: false },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-20 bg-red-800 dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2"></div>
            {/* Close button for mobile */}
            <button
              onClick={toggleSidebar}
              className="lg:hidden text-gray-600 dark:text-gray-300"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 px-4 py-6 overflow-y-auto">
            <ul className="space-y-2">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index}>
                    <a
                      href="#"
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        item.active
                          ? "bg-red-500 text-white"
                          : "text-gray-700 dark:text-gray-300 bg-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
