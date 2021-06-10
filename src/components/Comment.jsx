import React, { useState } from 'react';
import './comment.css';
import classNames from 'classnames';
import StarRate from './StarRate';
import TruncatedText from './TruncatedText';

function Comment({ summary, text, rating, viewOnly = true, username }) {
  const [isShown, setIsShown] = useState(false);

  const textClasses = classNames('comment__text comment__text_is-hidden', {
    'comment__text comment__text_is-shown': isShown,
  });

  const toggleText = () => setIsShown(!isShown);

  return (
    <div className="comment__item-container">
      <div className="comment__item_title-container">
        <TruncatedText text={summary} />
      </div>
      <div className="comment__item_name-container">
        <p className="comment__item_name">{username}</p>
      </div>
      <div className="comment__item_text-container">
        <p className={textClasses}>{text}</p>
      </div>
      <button
        className="comment__show-text_btn"
        onClick={toggleText}
        type="button"
      >
        {isShown ? 'Hide text' : 'Show text'}
      </button>
      <div className="comment__item_rating-container">
        <StarRate rating={rating} viewOnly={viewOnly} />
      </div>
    </div>
  );
}
export default Comment;
