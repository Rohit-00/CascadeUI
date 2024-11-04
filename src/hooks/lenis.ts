import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const useLenisScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.3, // The lower the number, the smoother the scrolling
      smoothWheel:true
    });

    lenis.on('scroll', (e: any) => {
      // You can listen for scroll events if needed
      console.log(e);
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
};

export default useLenisScroll;
