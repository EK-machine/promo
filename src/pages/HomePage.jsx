import React from 'react';
import './homepage.css';
import Carousel from '../components/Carousel';

function HomePage() {
  return (
    <div className="home__page">
      <div className="home__container">
        <section className="home__title-section">
          <h1 className="home__title">about me</h1>
        </section>
        <section className="home__content-section">
          <Carousel />
        </section>
      </div>
    </div>
  );
}
export default HomePage;
