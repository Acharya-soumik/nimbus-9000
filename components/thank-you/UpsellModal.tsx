"use client";

import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Modal, ModalContent } from "@/components/ui/modal"; // Using existing Modal if possible, or build new one. 
// Actually using the shared Modal component might be better if compatible, but typical Dialog is easier for simple alerts.
// Let's use a custom implementation or standard Dialog if available. 
// I see @/components/ui/modal is used in MultiStepForm. It seems to be a drawer/modal combo.
// Let's stick to a simple custom modal using Framer Motion or just a absolute overlay if "Dialog" isn't fully set up for this specific look.
// Checking imports in other files... "import { Modal... } from '@/components/ui/modal'".
// But for a simple upsell, I'll create a standalone component that uses fixed positioning.

import { motion, AnimatePresence } from "framer-motion";

interface UpsellModalProps {
  planId?: string;
  isOpen?: boolean;
  onClose?: () => void;
  onUpgrade?: () => void;
}

export function UpsellModal({ planId, isOpen: forcedOpen, onClose, onUpgrade }: UpsellModalProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    // Only show if plan is basic
    if (planId === 'basic') {
      // Small delay to let them see success message first
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [planId]);

  const handleUpgrade = () => {
    // Open WhatsApp
    const message = encodeURIComponent("Hi, I just paid for the Basic Legal Notice. I want to upgrade to the Smart Plan for ₹1,499.");
    window.open(`https://wa.me/917047683995?text=${message}`, '_blank');
    onUpgrade?.();
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
  };

  return (
    <AnimatePresence>
      {(isOpen || forcedOpen) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             exit={{ opacity: 0, scale: 0.95 }}
             className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
           >
             {/* Header */}
             <div className="bg-gradient-to-r from-primary to-primary-dark p-6 text-white text-center">
               <h3 className="text-xl font-bold mb-1">Wait! Don't Handle It Alone</h3>
               <p className="text-white/90 text-sm">Most people upgrade later.</p>
             </div>

             <div className="p-6">
                <p className="text-text-heading font-medium mb-4 text-center">
                  The waiting period (15 days) is the most stressful part.
                </p>
                
                <div className="bg-gray-50 rounded-xl p-4 mb-6 border border-gray-100">
                  <h4 className="font-bold text-sm text-text-muted uppercase tracking-wide mb-3">Include Full Handling</h4>
                   <ul className="space-y-2">
                     {[
                       "Professional follow-up call to other party",
                       "Review & explanation of their reply",
                       "We track deadlines for you",
                       "Guidance on next steps if they ignore"
                     ].map((item, i) => (
                       <li key={i} className="flex items-start gap-2 text-sm text-text-body">
                         <span className="text-success font-bold">✓</span>
                         {item}
                       </li>
                     ))}
                   </ul>
                </div>

                <div className="flex flex-col gap-3">
                   <button 
                     onClick={handleUpgrade}
                     className="w-full bg-primary text-white font-bold py-3.5 rounded-xl shadow-lg shadow-primary/30 hover:bg-primary-dark transition-all flex items-center justify-center gap-2"
                   >
                     Upgrade to Smart for ₹1,000
                     <span className="bg-white/20 px-2 py-0.5 rounded text-xs">OFFER</span>
                   </button>
                   
                   <button 
                     onClick={handleClose}
                     className="text-text-muted text-sm font-medium hover:text-text-heading transition-colors"
                   >
                     No thanks, I'll handle the follow-up myself
                   </button>
                </div>
             </div>
           </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
