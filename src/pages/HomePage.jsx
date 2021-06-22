import React from 'react';
import './homepage.css';
import Carousel from '../components/Carousel';

function HomePage() {
  return (
    <div className="home__page">
      <div className="home__container">
        <h1 className="home__title">About me</h1>
        <section className="home__content-section">
          <Carousel />
        </section>
      </div>
    </div>
  );
}
export default HomePage;
