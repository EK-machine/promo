import React from 'react';
import './homepage.css';
import Carousel from '../components/Carousel';

function HomePage() {
  return (
    <div className="home__page">
      <div className="home__container">
        <section className="home__title-section">
          <div className="home__title-background">
            <h1 className="home__title">about me</h1>
          </div>
        </section>
        <section className="home__content-section">
          <Carousel />
        </section>
      </div>
    </div>
  );
}
export default HomePage;
