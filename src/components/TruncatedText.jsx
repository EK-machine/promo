import React, { useState } from 'react';
import './truncatedtext.css';

const NUM_OF_LETTERS = 130;

function TruncatedText({ summary }) {
  const [isShown, setIsShown] = useState(false);

  const toggleText = () => setIsShown(!isShown);

  return summary ? (
    <div className="text__main-container">
      {isShown ? (
        <p className="text__container-visible">{summary}</p>
      ) : (
        <p className="text__container-unvisible">{summary}</p>
      )}

      {summary.length > NUM_OF_LETTERS ? (
        <button
          className="comment__show-text_btn"
          onClick={toggleText}
          type="button"
        >
          {isShown ? 'Hide text' : 'Show text'}
        </button>
      ) : null}
    </div>
  ) : null;
}

export default TruncatedText;
