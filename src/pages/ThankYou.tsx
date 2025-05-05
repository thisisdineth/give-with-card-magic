
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Heart, CheckCircle, Home } from 'lucide-react';

const ThankYou = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-red-50 to-white">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-10 flex justify-center">
            <div className="h-24 w-24 bg-red-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Thank You for Your Support!</h1>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl mb-10">
            <p className="text-xl text-gray-700 mb-8">
              Your generous contribution will make a real difference. We are incredibly grateful for your kindness and support of our mission.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10">
              <Button 
                onClick={() => navigate('/')}
                className="bg-red-600 hover:bg-red-700 text-white px-10 py-6 rounded-full text-lg font-semibold flex items-center gap-2"
              >
                <Home className="h-5 w-5" /> Return Home
              </Button>
              <Button 
                onClick={() => navigate('/donate')}
                className="bg-white hover:bg-gray-100 text-red-600 border-2 border-red-600 px-10 py-6 rounded-full text-lg font-semibold flex items-center gap-2"
              >
                <Heart className="h-5 w-5" /> Donate Again
              </Button>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-500 italic">
              A receipt has been sent to your email address
            </p>
          </div>
        </div>
      </div>
      
      <footer className="bg-gradient-to-r from-red-600 to-red-700 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© {new Date().getFullYear()} Card Magic. All rights reserved.</p>
          <p className="text-sm opacity-80">Making a difference, one donation at a time.</p>
        </div>
      </footer>
    </div>
  );
};

export default ThankYou;
