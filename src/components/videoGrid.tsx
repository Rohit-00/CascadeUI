import React from 'react';
import LazyVideo from './lazyVideo';

const videoSources = [
  'https://cloud.appwrite.io/v1/storage/buckets/670bf3d800356f2d1307/files/670d0a3500172ecc3b46/view?project=66cc3f88001fcc4896d5&project=66cc3f88001fcc4896d5&mode=admin',
  'https://cloud.appwrite.io/v1/storage/buckets/670bf3d800356f2d1307/files/670bfa57002fc8873ab8/view?project=66cc3f88001fcc4896d5&project=66cc3f88001fcc4896d5&mode=admin',
  'https://cloud.appwrite.io/v1/storage/buckets/670bf3d800356f2d1307/files/670d0a40001a1506aea3/view?project=66cc3f88001fcc4896d5&project=66cc3f88001fcc4896d5&mode=admin',
  // Add more video URLs as needed
];

const VideoGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 h-[30rem] w-[30rem]">
      {videoSources.map((src, index) => (
        <LazyVideo key={index} src={src} />
      ))}
    </div>
  );
};

export default VideoGrid;
