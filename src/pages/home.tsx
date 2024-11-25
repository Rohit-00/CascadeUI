import '../index.css'
import Hero from '../components/Hero';
import Code from '../components/code';
import Use from '../components/use';
import InfiniteScrollCards from '../components/comps';


const HomePage = () => {
  return (
    <>
   <div>
    <Hero/>
    <Use/>
    <Code/>
    <InfiniteScrollCards/>
    </div>
    </>
  );
};

export default HomePage;
