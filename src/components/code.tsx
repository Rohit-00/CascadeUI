import { Iphone15Pro } from "./iphone";

function Code() {
  return (
    <div className="mt-16 ">
      <div className="sm:text-5xl font-bold text-3xl text-center mb-11">Reusable Components</div>
      <div className="mt-5 flex sm:flex-row flex-col justify-evenly items-center">
      <div className="h-[25rem] sm:w-[32rem] bg-slate-800 px-5">
        <div className="flex flex-row gap-2 pt-4">
            <div className="h-5 w-5 rounded-full bg-red-500"/>
            <div className="h-5 w-5 rounded-full bg-yellow-500"/>
            <div className="h-5 w-5 rounded-full bg-green-500"/>
        </div>
        <div>
          <pre className="text-xs sm:text-base text-white  overflow-y-hidden mt-4">
            <code className="">
                {`import { StyleSheet, View } from 'react-native'\n`}
                {`import React from 'react'\n`}
                {`import {AnimatedTabs} from '@cascadeui/animated-tabs'\n\n`}
              {`const App = () => {\n`}
              {`  return (\n`}
              {`    <View>\n`}
              <span className="text-green-400">
                {`      <TabBar  tabs={['Home', 'Profile', 'Settings']}\n`}
              {`       contents={[<HomeContent />, 
                  <ProfileContent />, 
                  <SettingsContent />]} />\n`}
              </span>
              {`    </View>)};\n\n`}
                {`export default App\n`}
            </code>
          </pre>
        </div>
      </div>
      <Iphone15Pro className="size-[30rem] max-w-fit"/>
      </div>
      
    </div>
  );
}

export default Code;
