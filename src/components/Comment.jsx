import React from 'react';
import './comment.css';
import StarRate from './StarRate';
import MyText from './MyText';

function Comment() {
  return (
    <div className="comment__item-container">
      <div className="comment__item_title-container">
        <MyText />
      </div>
      <div className="comment__item_text-container">
        <MyText />
      </div>
      <div className="comment__item_rating-container">
        <StarRate />
      </div>
    </div>
  );
}
export default Comment;
