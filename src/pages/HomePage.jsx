import React from 'react';
import serverService from '../components/serverService.js';

function HomePage() {
  const x = new serverService();
  const url = 'https://zhekah-promo-backend.herokuapp.com/reviews';
  x.get(url);
  return (
    <>
      <h1>Homepage</h1>
    </>
  );
}
export default HomePage;
