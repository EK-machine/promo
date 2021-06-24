import React from 'react';
import './progressscrollbar.css';

function ProgressScrollBar({ scroll }) {
  return (
    <div className="bar__wrapper">
      <div className="bar__stripe" style={{ width: `${scroll}%` }} />
    </div>
  );
}

export default ProgressScrollBar;
