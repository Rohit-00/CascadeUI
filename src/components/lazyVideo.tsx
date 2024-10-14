import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface LazyVideoProps {
  src: string;
}

const LazyVideo: React.FC<LazyVideoProps> = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });

  useEffect(() => {
    if (inView && videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    } else if (!inView && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        controls={false}
        playsInline
       
      />
    </div>
  );
};

export default LazyVideo;
