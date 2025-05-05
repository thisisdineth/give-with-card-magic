
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import PaymentModal from '../components/PaymentModal';
import { Card, CardContent } from "@/components/ui/card";

const Donate = () => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Support Our Mission</h1>
            <p className="text-xl text-gray-600">
              Your donation helps us continue our work and make a difference.
              Every contribution, no matter how small, is valuable to us.
            </p>
          </div>

          <Card className="mb-12 overflow-hidden shadow-lg">
            <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
              <div className="text-white text-2xl font-bold">Make a Difference Today</div>
            </div>
            <CardContent className="p-6">
              <p className="text-gray-600 mb-6">
                We're committed to making a positive impact in our community. Your generosity 
                enables us to continue our mission and expand our reach to help more people.
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full 
                    text-lg font-semibold transform hover:scale-105 transition-all duration-300 
                    shadow-lg hover:shadow-xl pulse-effect"
                >
                  Donate Now
                </button>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2 text-gray-800">Transparency</h3>
              <p className="text-gray-600">
                We're committed to being transparent about how we use your donations. 
                Detailed reports are available on request.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2 text-gray-800">Impact</h3>
              <p className="text-gray-600">
                Your donations directly fund our projects and initiatives, 
                creating real change in the communities we serve.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2 text-gray-800">Recognition</h3>
              <p className="text-gray-600">
                All donors are acknowledged in our annual report and invited 
                to special events throughout the year.
              </p>
            </div>
          </div>
        </div>
      </div>

      <PaymentModal 
        isOpen={isPaymentModalOpen} 
        onClose={() => setIsPaymentModalOpen(false)} 
      />
    </div>
  );
};

export default Donate;
