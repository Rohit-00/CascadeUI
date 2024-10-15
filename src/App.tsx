import Components from './components/components';
import Hero from './components/Hero';
import Navbar from './components/navbar';
import Steps from './components/steps';

import useLenisScroll from './hooks/lenis';


import './index.css';

const App = () => {
useLenisScroll()

  return (
    <div className="App sm:mx-10 mx-4">
  <Navbar/>
    <Hero/>

<Steps/>
<Components/>
    </div>
  );
};

export default App;
