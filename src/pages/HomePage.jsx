import React, { useEffect } from 'react';
import reviewService from '../components/serverService.js';

function HomePage() {
  useEffect(() => {
    reviewService.getAll().then((result) => {
      console.log(result);
    });
  }, []);
  return (
    <>
      <h1>Homepage</h1>
    </>
  );
}
export default HomePage;
