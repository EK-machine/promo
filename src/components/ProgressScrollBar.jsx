import React from 'react';
import './progressscrollbar.css';

function ProgressScrollBar({ scrollTop }) {
  return (
    <div className="bar__wrapper">
      <div className="bar__stripe" stype={{ width: `${scrollTop}%` }} />
    </div>
  );
}

export default ProgressScrollBar;
