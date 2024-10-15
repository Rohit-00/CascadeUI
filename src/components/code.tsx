const sampleCode = `
import { AnimatedSubscribeButton } 
from '../components/animatedButton'

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

export default App
`
const sampleCode2 = `
import { StyleSheet, View } from 'react-native'
import React from 'react'
import CreditCard from '../components/creditCard'

const App = () => {
  return (
    <View>
      <CreditCard
      bankName='SBI'
      cardHolderName='Rohit'
      cardNumber={'1234 5678 9123 4567'}
      expiryDate={'12/25'}
      cvv={699}
      />
    </View>)};

export default App
`
const sampleCode3 = `
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AnimatedList from '../components/animatedList'

const App = () => {
  return (
    <AnimatedList
    ItemStyle={Item} // React component that defines style for each of the list item
    data={data}
    animation={'slide-left-spring'}
    />
  )
}

export default App
`
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
    <pre className="text-xs sm:text-base  overflow-hidden text-white overflow-y-hidden">
        <code className=" ">
            {sampleCode2}
        </code>
    </pre>
        </div>
      </div>

      </div>
    </div>
  )
}

export default Code
