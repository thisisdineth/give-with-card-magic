
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">Welcome to Card Magic</h1>
          <p className="text-xl text-gray-600 mb-8">Support our cause by making a donation today!</p>
          <Link 
            to="/donate" 
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
