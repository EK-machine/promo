import React from 'react';
import './progressscrollbar.css';

function ProgressScrollBar({ scrolling }) {
  return (
    <div className={scrolling < 99 ? 'bar__wrapper' : 'bar__wrapper-unvisible'}>
      <div className="bar__stripe" style={{ width: `${scrolling}%` }} />
    </div>
  );
}

export default ProgressScrollBar;
