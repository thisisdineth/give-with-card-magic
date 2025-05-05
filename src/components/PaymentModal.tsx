
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { X, CreditCard, DollarSign } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

interface PaymentOption {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  
  const paymentOptions: PaymentOption[] = [
    { 
      id: 'card', 
      name: 'Credit / Debit Card', 
      icon: <CreditCard className="h-6 w-6" />, 
      color: 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700' 
    },
    { 
      id: 'hela', 
      name: 'Hela Pay', 
      icon: <DollarSign className="h-6 w-6" />, 
      color: 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700' 
    },
    { 
      id: 'mastercard', 
      name: 'Master', 
      icon: <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-[#EB001B] text-xs">M</div>, 
      color: 'bg-gradient-to-r from-[#EB001B] to-[#F79E1B] hover:from-[#D9001B] hover:to-[#E79E1B]' 
    },
    { 
      id: 'visa', 
      name: 'Visa', 
      icon: <div className="flex items-center justify-center w-6 h-6 rounded bg-[#1434CB] text-white text-xs">V</div>, 
      color: 'bg-gradient-to-r from-[#1434CB] to-[#0C2A91] hover:from-[#0F2A9E] hover:to-[#0A2278]' 
    },
    { 
      id: 'ipay', 
      name: 'iPay', 
      icon: <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-purple-600 text-xs">iP</div>, 
      color: 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700' 
    },
    { 
      id: 'frimij', 
      name: 'Frimij', 
      icon: <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-orange-600 text-xs">F</div>, 
      color: 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700' 
    },
  ];

  const handlePaymentSelect = (paymentId: string) => {
    console.log(`Selected payment method: ${paymentId}`);
    // In a real app, you would process payment here
    
    // Close the modal
    onClose();
    
    // Navigate to the thank you page after a short delay (simulating processing)
    setTimeout(() => {
      navigate('/thank-you');
    }, 500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md border-0">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-gray-800">Choose Payment Method</DialogTitle>
          <DialogDescription className="text-center">
            Select how you'd like to make your donation
          </DialogDescription>
        </DialogHeader>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {paymentOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => handlePaymentSelect(option.id)}
              className={cn(
                "flex items-center space-x-3 px-4 py-3 rounded-lg text-white font-medium",
                "transform transition-all duration-200 hover:scale-105 shadow-md",
                option.color
              )}
            >
              <span className="flex-shrink-0">{option.icon}</span>
              <span>{option.name}</span>
            </button>
          ))}
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>All payment methods are secure and encrypted</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
