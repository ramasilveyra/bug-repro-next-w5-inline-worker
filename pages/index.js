import React, { useEffect } from 'react';
import HelloWorker from '../lib/hello.worker';

const Home = () => {
  useEffect(() => {
    const worker = new HelloWorker();

    const listenerCb = (event) => {
      console.log('message from web worker:', event.data);
    };

    worker.addEventListener('message', listenerCb);

    worker.postMessage('Hello');

    return () => {
      worker.removeEventListener('message', listenerCb);
    };
  }, []);

  return <div>Hello!</div>;
};

export default Home;
