import Code from './components/code';
import Components from './components/components';
import Footer from './components/footer';
import Hero from './components/Hero';
import Navbar from './components/navbar';
import Steps from './components/steps';

//smooth scroll
import useLenisScroll from './hooks/lenis';


import './index.css';

const App = () => {
useLenisScroll()
  return (
    <>
    <div className="scrollbar-container sm:mx-10 mx-4 scrollbar-container">
  <Navbar/>
    <Hero/>

<Steps/>
<Code/>
<Components/>

    </div>
    <Footer/>
    </>
  );
};

export default App;
