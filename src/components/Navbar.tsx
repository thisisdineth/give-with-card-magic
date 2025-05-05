
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <nav className="sticky top-0 z-10 bg-white shadow-md py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-red-600 hover:text-red-700 transition-colors flex items-center gap-2">
          <Heart className="h-5 w-5 fill-red-600" /> 
          <span>Card Magic</span>
        </Link>
        <div className="space-x-6">
          <Link 
            to="/" 
            className={`transition-colors ${isActive('/') 
              ? 'text-red-600 font-semibold' 
              : 'text-gray-600 hover:text-red-600'}`}
          >
            Home
          </Link>
          <Link 
            to="/donate" 
            className={`transition-colors ${isActive('/donate') 
              ? 'text-red-600 font-semibold' 
              : 'text-gray-600 hover:text-red-600'}`}
          >
            Donate
          </Link>
          <Link 
            to="/thank-you" 
            className={`transition-colors ${isActive('/thank-you') 
              ? 'text-red-600 font-semibold' 
              : 'text-gray-600 hover:text-red-600'}`}
          >
            Thank You
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
