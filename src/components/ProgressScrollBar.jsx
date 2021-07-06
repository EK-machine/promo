import React from 'react';
import './progressscrollbar.css';

function ProgressScrollBar({ scrolling }) {
  return (
    <div className="bar__wrapper">
      <div className="bar__stripe" style={{ width: `${scrolling}%` }} />
    </div>
  );
}

export default ProgressScrollBar;
