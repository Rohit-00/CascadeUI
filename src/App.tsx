

import Hero from './components/Hero';
import Navbar from './components/navbar';
import './index.css';

const App = () => {
  return (
    <div className="App sm:mx-10 mx-4 ">
  <Navbar/>
    <Hero/>
    </div>
  );
};

export default App;
