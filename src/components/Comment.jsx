import React from 'react';
import './comment.css';
import StarRate from './StarRate';
import TruncatedText from './TruncatedText';

function Comment({ summary, text, rating, viewOnly = true, username }) {
  return (
    <div className="comment__item-container">
      <div className="comment__item_name-container">
        <p className="comment__item_name">{username}</p>
      </div>
      <div className="comment__item_title-container">
        <TruncatedText summary={summary} />
      </div>
      <div className="comment__item_text-container">
        <TruncatedText summary={text} />
      </div>
      <div className="comment__item_rating-container">
        <StarRate rating={rating} viewOnly={viewOnly} />
      </div>
    </div>
  );
}
export default Comment;
