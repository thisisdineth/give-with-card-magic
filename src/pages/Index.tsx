
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Heart, ArrowRight, Gift, Users, Globe } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-20 md:py-32">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Make A Difference Today</h1>
            <p className="text-xl opacity-90 mb-8">
              Your support powers our mission to create positive change in communities worldwide.
            </p>
            <Link 
              to="/donate" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Donate Now <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="md:w-5/12">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-red-400 rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-red-800 rounded-full opacity-20 animate-pulse delay-300"></div>
              <img 
                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb0?auto=format&fit=crop&q=80&w=2000" 
                alt="People helping each other" 
                className="rounded-2xl shadow-2xl w-full object-cover"
                style={{ height: '400px' }}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Impact Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Through your generous support, we've been able to make real change in our communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Gift className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">$2.5M+</h3>
              <p className="text-gray-600">Donated to causes worldwide helping those in need</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">50,000+</h3>
              <p className="text-gray-600">People directly impacted by our support initiatives</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">25+</h3>
              <p className="text-gray-600">Countries where we've supported local initiatives</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/donate" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-colors"
            >
              <Heart className="h-5 w-5" /> Join Our Mission
            </Link>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl overflow-hidden shadow-xl">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-10 md:p-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to make an impact?</h2>
                <p className="text-white text-lg mb-8 opacity-90">
                  Your contribution, no matter how small, can create a ripple effect of positive change.
                </p>
                <Link 
                  to="/donate" 
                  className="inline-block px-8 py-4 bg-white text-red-600 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
                >
                  Donate Now
                </Link>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1469571486292-b53601020a8f?auto=format&fit=crop&q=80&w=2000" 
                  alt="Happy volunteers" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-red-600 to-red-700 text-white py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="text-2xl font-bold text-white flex items-center gap-2">
                <Heart className="h-5 w-5 fill-white" /> 
                <span>Card Magic</span>
              </Link>
              <p className="mt-2 opacity-80">Making a difference, one donation at a time.</p>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <Link to="/" className="text-white hover:text-red-200 transition-colors">
                Home
              </Link>
              <Link to="/donate" className="text-white hover:text-red-200 transition-colors">
                Donate
              </Link>
              <Link to="/thank-you" className="text-white hover:text-red-200 transition-colors">
                Thank You
              </Link>
            </div>
          </div>
          <div className="border-t border-red-400 mt-8 pt-8 text-center">
            <p>© {new Date().getFullYear()} Card Magic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
