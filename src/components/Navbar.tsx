
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
          Card Magic
        </Link>
        <div className="space-x-6">
          <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link to="/donate" className="text-gray-600 hover:text-blue-600 transition-colors">
            Donate
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
