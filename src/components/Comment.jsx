import React from 'react';
import './comment.css';
import StarRate from './StarRate';
import MyTextTitle from './MyTextTitle';
import MyTextParagraph from './MyTextParagraph';

function Comment({ title, text }) {
  return (
    <div className="comment__item-container">
      <div className="comment__item_title-container">
        <MyTextTitle title={title} />
      </div>
      <div className="comment__item_text-container">
        <MyTextParagraph text={text} />
      </div>
      <div className="comment__item_rating-container">
        <StarRate />
      </div>
    </div>
  );
}
export default Comment;
