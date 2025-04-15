import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
      <Link to="/" className="flex items-center space-x-3">
        <img 
          src="/Assets/robot-icon.png" // Just the robot head icon
          alt="QuickBot Icon" 
          className="h-16 w-auto" 
        />
        <span className="text-3xl font-bold text-white">QuickBot</span>
      </Link>
      
      <div className="flex gap-8 text-lg font-medium">
        <Link to="/features" className="hover:text-purple-500 transition-colors">Features</Link>
        <Link to="/team" className="hover:text-purple-500 transition-colors">Team</Link>
        <Link to="/pricing" className="hover:text-purple-500 transition-colors">Pricing</Link>
      </div>
    </nav>
  );
}

export default Navbar;
