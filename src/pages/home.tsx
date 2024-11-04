import '../index.css'
import Hero from '../components/Hero';
import Steps from '../components/steps';
import Code from '../components/code';
import Components from '../components/components';
import Use from '../components/use';


const HomePage = () => {
  return (
    <>
   <div>
    <Hero/>
    <Use/>
    <Steps/>
    <Code/>
    <Components/>

    </div>
    </>
  );
};

export default HomePage;
