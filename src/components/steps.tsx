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
    <section className="py-16 mt-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-5xl font-bold text-center">Quick Start Guide</h2>
        <div className="text-center font-base mb-11">Easy to implement components</div>
        <div className="max-w-3xl mx-auto">
          <div className="flex mb-4">
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
  );
}

export default Steps;
