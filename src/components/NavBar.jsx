import React, { useState } from "react";
import {
  Menu,
  X,
  Home,
  Package,
  FileText,
  Phone,
  LogOut,
  User,
} from "lucide-react";

const NavBar = ({ activeTab, setActiveTab, userName, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "home", icon: <Home size={20} /> },
    { label: "Products", href: "products", icon: <Package size={20} /> },
    { label: "Submit Form", href: "submitform", icon: <FileText size={20} /> },
    { label: "Help Line", href: "helpline", icon: <Phone size={20} /> },
  ];

  const handleNavClick = (href) => {
    setActiveTab(href);
    setIsOpen(false);
  };

  const handleLogout = () => {
    setIsOpen(false);
    onLogout();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-secondary to-dark shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="text-white font-bold text-2xl md:text-3xl">
              <span className="text-primary">FIT</span>HUB
            </div>
            <div className="ml-3 hidden sm:block text-accent text-xs md:text-sm font-semibold">
              PREMIUM TRAINING
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition duration-300 ${
                  activeTab === item.href
                    ? "bg-primary text-white shadow-lg"
                    : "text-gray-100 hover:bg-accent/20 hover:text-accent"
                }`}
              >
                {item.icon}
                <span className="text-sm lg:text-base font-medium">
                  {item.label}
                </span>
              </button>
            ))}
          </div>

          {/* Desktop User Section */}
          <div className="hidden md:flex items-center space-x-4">
            {userName && (
              <div className="flex items-center space-x-2 px-3 py-2 bg-gray-700/30 rounded-lg">
                <User size={18} className="text-accent" />
                <span className="text-white text-sm font-medium">
                  {userName}
                </span>
              </div>
            )}
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-red-600/80 hover:bg-red-600 text-white transition duration-300"
            >
              <LogOut size={20} />
              <span className="text-sm font-medium">Logout</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-accent hover:bg-accent/20 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-700">
            <div className="space-y-2 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition duration-300 ${
                    activeTab === item.href
                      ? "bg-primary text-white"
                      : "text-gray-100 hover:bg-accent/20 hover:text-accent"
                  }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}

              {/* Mobile User Section */}
              <div className="border-t border-gray-700 pt-4 mt-4 space-y-2">
                {userName && (
                  <div className="flex items-center space-x-2 px-4 py-3 bg-gray-700/30 rounded-lg">
                    <User size={18} className="text-accent" />
                    <span className="text-white font-medium">{userName}</span>
                  </div>
                )}
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg bg-red-600/80 hover:bg-red-600 text-white transition duration-300"
                >
                  <LogOut size={20} />
                  <span className="font-medium">Logout</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
