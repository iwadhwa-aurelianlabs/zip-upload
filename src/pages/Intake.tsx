import React from 'react';
import { FinancingHelpForm } from '@/components/forms/FinancingHelpForm';

const Intake = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
      <h1 className="font-cinzel text-4xl text-center mb-4">Capital Intake</h1>
      <p className="font-lato text-center text-gray-400 mb-12">Begin the preliminary audit process for your capital structure.</p>
      <div className="bg-[#051F16] border border-[#D4AF37]/10 p-8 rounded-sm">
        <FinancingHelpForm />
      </div>
    </div>
  );
};

export default Intake;
