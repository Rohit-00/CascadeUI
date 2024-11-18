import { useState } from "react";

function Steps() {
  const [activeTab, setActiveTab] = useState<'installation' | 'usage'>('installation');

  const quickStartTabs: Record<'installation' | 'usage', string> = {
    installation: `npm install @cascadeui/animated-tabs

# or with yarn
yarn add @cascadeui/animated-tabs

#or just copy paste the code from the docs like a champ
`,
    usage: `import { AnimatedTabs } from '@cascadeui/animated-tabs';

function MyComponent() {
  return (
    <Button onPress={() => console.log('Pressed!')}>
      Press me
    </Button>
  );
}`,
  };

  return (
    <div className="sm:flex sm:items-center sm:justify-center">
      <section className="py-16 rounded-lg shadow-lg">
        <div className="container">
          <h2 className="text-3xl sm:text-5xl font-bold text-center">Quick Start Guide</h2>
          <div className="font-base mb-11 text-center">Easy to implement components</div>
          <div className="max-w-3xl mx-auto">
            <div className="flex sm:justify-center">
              <button
                className={`py-2 px-4 font-semibold ${activeTab === 'installation' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                onClick={() => setActiveTab('installation')}
              >
                Installation
              </button>
              <button
                className={`py-2 px-4 font-semibold ${activeTab === 'usage' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                onClick={() => setActiveTab('usage')}
              >
                Usage
              </button>
            </div>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{quickStartTabs[activeTab]}</code>
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Steps;
