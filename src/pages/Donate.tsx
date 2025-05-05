
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import PaymentModal from '../components/PaymentModal';
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Award, Clock } from 'lucide-react';

const donationOptions = [
  { amount: 25, label: "Basic Support", description: "Provides essential resources" },
  { amount: 50, label: "Friend", description: "Helps fund our key programs" },
  { amount: 100, label: "Supporter", description: "Makes a significant impact" },
  { amount: 250, label: "Champion", description: "Drives major initiatives forward" },
  { amount: 500, label: "Hero", description: "Creates lasting positive change" },
];

const Donate = () => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');

  const handleDonateClick = () => {
    if (selectedAmount || (customAmount && parseFloat(customAmount) > 0)) {
      setIsPaymentModalOpen(true);
    } else {
      alert("Please select or enter a donation amount");
    }
  };

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAmount(null);
    setCustomAmount(e.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-red-50 to-white">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Support Our Mission</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your donation helps us continue our work and make a real difference.
              Every contribution matters and is deeply appreciated.
            </p>
          </div>

          <Card className="mb-12 overflow-hidden shadow-lg border-0">
            <div className="h-48 bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center">
              <div className="text-white text-3xl font-bold">Change Lives Today</div>
            </div>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="flex flex-col items-center p-5 bg-red-50 rounded-lg">
                  <Shield className="text-red-500 h-10 w-10 mb-3" />
                  <h3 className="font-bold text-lg mb-1 text-gray-800">Secure</h3>
                  <p className="text-gray-600 text-center">
                    All donations are processed with bank-level security.
                  </p>
                </div>
                <div className="flex flex-col items-center p-5 bg-red-50 rounded-lg">
                  <Clock className="text-red-500 h-10 w-10 mb-3" />
                  <h3 className="font-bold text-lg mb-1 text-gray-800">Immediate</h3>
                  <p className="text-gray-600 text-center">
                    Your support is put to work right away.
                  </p>
                </div>
                <div className="flex flex-col items-center p-5 bg-red-50 rounded-lg">
                  <Award className="text-red-500 h-10 w-10 mb-3" />
                  <h3 className="font-bold text-lg mb-1 text-gray-800">Impactful</h3>
                  <p className="text-gray-600 text-center">
                    100% of proceeds go directly to our programs.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">Select Donation Amount</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
                  {donationOptions.map((option) => (
                    <div 
                      key={option.amount}
                      onClick={() => handleAmountSelect(option.amount)}
                      className={`cursor-pointer p-4 rounded-lg border-2 text-center transition-all ${
                        selectedAmount === option.amount 
                          ? 'border-red-500 bg-red-50 transform scale-105' 
                          : 'border-gray-200 hover:border-red-300'
                      }`}
                    >
                      <div className="font-bold text-xl mb-1">${option.amount}</div>
                      <div className="text-sm">{option.label}</div>
                      <div className="text-xs text-gray-500">{option.description}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <div className="w-full sm:w-auto flex-grow">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Custom Amount ($)</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">$</span>
                      </div>
                      <input
                        type="number"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                        className="focus:ring-red-500 focus:border-red-500 block w-full pl-7 pr-12 py-3 sm:text-sm border-gray-300 rounded-md"
                        placeholder="Enter amount"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <button
                  onClick={handleDonateClick}
                  className="px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full 
                    text-lg font-semibold transform hover:scale-105 transition-all duration-300 
                    shadow-lg hover:shadow-xl flex items-center gap-2 pulse-effect"
                >
                  <Heart className="h-5 w-5 fill-white" /> Donate Now
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <PaymentModal 
        isOpen={isPaymentModalOpen} 
        onClose={() => setIsPaymentModalOpen(false)} 
      />
      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-red-600 to-red-700 text-white py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold">Card Magic</div>
              <p className="mt-2 opacity-80">Making a difference, one donation at a time.</p>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <a href="/" className="text-white hover:text-red-200 transition-colors">
                Home
              </a>
              <a href="/donate" className="text-white hover:text-red-200 transition-colors">
                Donate
              </a>
              <a href="/thank-you" className="text-white hover:text-red-200 transition-colors">
                Thank You
              </a>
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

export default Donate;
