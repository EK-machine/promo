import React from 'react';
import './skeletonloader.css';

const SKELETONS = [1, 2, 3];

function SkeletonLoader() {
  return (
    <div className="skeleton__container">
      {SKELETONS.map((skitem) => (
        <div className="skeleton__item" key={skitem}>
          <span className="skeleton__item-line" />
          <span className="skeleton__item-line" />
          <span className="skeleton__item-line" />
          <span className="skeleton__item-line_short" />
          <div className="skeleton__item-glow" />
        </div>
      ))}
    </div>
  );
}

export default SkeletonLoader;
