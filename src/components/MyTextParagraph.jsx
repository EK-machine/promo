import React, { useState } from 'react';
import './mytextparagraph.css';
import classNames from 'classnames';

function MyTextParagraph({ text }) {
  const [isShown, setIsShown] = useState(false);

  const textClasses = classNames('text text__is-hidden', {
    'text text__is-shown': isShown,
  });

  const toggleText = () => setIsShown(!isShown);

  return (
    <div className="text__container">
      <p className={textClasses}>{text}</p>
      <button className="text__show-btn" onClick={toggleText} type="button">
        {isShown ? 'Hide text' : 'Show text'}
      </button>
    </div>
  );
}
export default MyTextParagraph;
