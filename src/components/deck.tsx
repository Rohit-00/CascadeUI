import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Card } from './card';

const codeSnippets = [
  {
    language: 'typescript',
    code: `import { AnimatedSubscribeButton } from '../components/animatedButton'

const App = () => {
  return (
    <View>
      <AnimatedSubscribeButton
  buttonColor="#000000"
  buttonTextColor="#ffffff"
  subscribeStatus={false}
  initialText="Subscribe"
  changeText="Subscribed"
      />

    </View>
  )}

export default App`,
  },
  {
    language: 'typescript',
    code: `<AnimatedInput
      label='Enter anything'
      labelStyle={{}}
      containerStyle={{}}
      inputStyle={{}}
      onChangeText={setEmail}
      />`,
  },
  {
    language: 'typescript',
    code: ` <AnimatedList
    ItemStyle={Item} // React component that defines style for each of the list item
    data={data}
    animation={'slide-left-spring'}
    />`,
  },
  {
    language: 'typescript',
    code: `<TabBar  tabs={['Home', 'Profile', 'Settings']}
     contents={[<HomeContent />, <ProfileContent />, <SettingsContent />]} />`,
  },
  {
    language: 'typescript',
    code: `<HoldMenu items={menuItems}>
        <View style={{ padding: 20, borderRadius: 8 ,backgroundColor:'#f2f2f2'}}>
          <Text>Hold me to open menu</Text>
        </View>
      </HoldMenu>`,
  },
];

export const Deck: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % codeSnippets.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative sm:w-[800px] sm:h-[400px]">
      <AnimatePresence>
        {codeSnippets.map((snippet, index) => (
          <Card
            key={snippet.language}
            language={snippet.language}
            code={snippet.code}
            isActive={index === currentIndex}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

