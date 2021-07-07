import React from 'react';
import './skeletonloader.css';

function SkeletonLoader() {
  return (
    <div className="skeleton__container">
      <div className="skeleton__item">
        <span className="skeleton__item-line" />
        <span className="skeleton__item-line" />
        <span className="skeleton__item-line" />
        <span className="skeleton__item-line_short" />
        <div className="skeleton__item-glow" />
      </div>
      <div className="skeleton__item">
        <span className="skeleton__item-line" />
        <span className="skeleton__item-line" />
        <span className="skeleton__item-line" />
        <span className="skeleton__item-line_short" />
        <div className="skeleton__item-glow" />
      </div>
      <div className="skeleton__item">
        <span className="skeleton__item-line" />
        <span className="skeleton__item-line" />
        <span className="skeleton__item-line" />
        <span className="skeleton__item-line_short" />
        <div className="skeleton__item-glow" />
      </div>
    </div>
  );
}

export default SkeletonLoader;
