import React from 'react';

interface StepIndicatorProps {
  step: number;
  title: string;
  currentStep: number;
  formData: any;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ step, title, currentStep, formData }) => {
  const isActive = step === currentStep;
  const isCompleted = step < currentStep;

  return (
    <div className="flex items-center relative mb-4">
      <div
        className={`flex items-center justify-center w-8 h-8 border-2 ${
          isCompleted ? 'bg-black text-white border-black' : 'bg-white text-black border-black'
        } rounded-full z-10`}
      >
        {isCompleted ? '✔️' : step}
      </div>
      <span className="ml-4">{title}</span>
    </div>
  );
};

export default StepIndicator;
