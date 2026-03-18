import React from 'react';
import { useLocation, Link } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  
  const menuItems = [
    { name: 'Dashboard', path: '/', icon: '📊' },
    { name: 'Accounts', path: '/accounts', icon: '🏦' },
    { name: 'Profile', path: '/profile', icon: '👤' },
  ];

  return (
    <div className="w-64 bg-gray-50 dark:bg-gray-900 h-screen shadow-lg border-r border-gray-200 dark:border-gray-700 fixed left-0 top-0 pt-16">
      <div className="p-4">
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                location.pathname === item.path
                  ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;