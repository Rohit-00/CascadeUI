function Code() {
  return (
    <div className="mt-16 ">
      <div className="sm:text-5xl font-semibold text-3xl ">Reusable Components</div>
      <div className="mt-5 flex sm:flex-row flex-col justify-evenly gap-4">
     
      <div className="h-[30rem] sm:w-[30rem] bg-slate-800 px-5">
        <div className="flex flex-row gap-2 pt-4">
            <div className="h-5 w-5 rounded-full bg-red-500"/>
            <div className="h-5 w-5 rounded-full bg-yellow-500"/>
            <div className="h-5 w-5 rounded-full bg-green-500"/>
        </div>
        <div>
          <pre className="text-xs sm:text-base text-white overflow-hidden overflow-y-hidden">
            <code className="">
                {`import { StyleSheet, View } from 'react-native'\n`}
                {`import React from 'react'\n`}
                {`import CreditCard from '../components/creditCard'\n\n`}
              {`const App = () => {\n`}
              {`  return (\n`}
              {`    <View>\n`}
              <span className="text-green-400">
                {`      <CreditCard\n`}
              {`      bankName='SBI'\n`}
              {`      cardHolderName='Rohit'\n`}
              {`      cardNumber={'1234 5678 9123 4567'}\n`}
              {`      expiryDate={'12/25'}\n`}
              {`      cvv={699}\n`}
              {`      />\n`}
              </span>
              {`    </View>)};\n\n`}
                {`export default App\n`}
            </code>
          </pre>
        </div>
      </div>

      </div>
    </div>
  );
}

export default Code;
