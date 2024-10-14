import React, { useState } from 'react';
import { CheckCircle, Circle } from 'lucide-react';

const steps = [
  { title: 'Choose a UI Library', description: 'Research and select a UI library that fits your project needs.' },
  { title: 'Install Dependencies', description: 'Use npm or yarn to install the chosen UI library and its dependencies.' },
  { title: 'Configure the Library', description: 'Set up any necessary configuration files or settings for the UI library.' },
  { title: 'Import Components', description: 'Import the required components in your React files.' },
  { title: 'Customize Styles', description: 'Adjust the styles to match your project\'s design system.' },
  { title: 'Test Implementation', description: 'Ensure all components are working correctly in your application.' }
];

const UILibrarySteps = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-purple-800">Implementing a UI Library</h2>
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div 
            key={index}
            className={`flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 ${
              index === currentStep ? 'bg-white shadow-md' : 'hover:bg-white/50'
            }`}
            onClick={() => setCurrentStep(index)}
          >
            <div className="flex-shrink-0 mt-1">
              {index <= currentStep ? (
                <CheckCircle className="w-6 h-6 text-green-500" />
              ) : (
                <Circle className="w-6 h-6 text-gray-300" />
              )}
            </div>
            <div>
              <h3 className={`text-lg font-semibold ${
                index <= currentStep ? 'text-purple-700' : 'text-gray-500'
              }`}>
                {step.title}
              </h3>
              <p className={`mt-1 ${
                index <= currentStep ? 'text-gray-600' : 'text-gray-400'
              }`}>
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button
          className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-300"
          onClick={() => setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
        >
          {currentStep < steps.length - 1 ? 'Next Step' : 'Start Over'}
        </button>
      </div>
    </div>
  );
};

export default UILibrarySteps;