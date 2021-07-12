import React from 'react';
import './careerpage.css';
import ProgressScrollBar from '../components/ProgressScrollBar';
import CareerItem from '../components/CareerItem';
import Hire from '../components/Hire';

function CareerPage({ scrolling }) {
  return (
    <div className="career__page">
      <section className="career__scroll-section">
        <ProgressScrollBar scrolling={scrolling} />
      </section>
      <section className="career__page-content_container">
        <div className="career__container">
          <section className="career__content-section">
            <h1 className="career__content-section_title">My career</h1>
            <div
              className="career__content-section_background"
              style={{
                transform: `translateY(${scrolling * 0.3}%)`,
                backgroundImage: `url('/images/BGL.png')`,
              }}
            />
            <CareerItem scrolling={scrolling} />
          </section>
          <section
            className={
              scrolling < 98
                ? 'career__hire-section_unvisible'
                : 'career__hire-section_visible'
            }
          >
            <Hire />
          </section>
        </div>
      </section>
    </div>
  );
}

export default CareerPage;
