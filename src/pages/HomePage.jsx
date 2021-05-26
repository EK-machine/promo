import React from 'react';
import reviewService from '../components/serverService.js';

function HomePage() {
  reviewService.getAll();
  return (
    <>
      <h1>Homepage</h1>
    </>
  );
}
export default HomePage;
