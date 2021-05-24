import React from 'react';
import './commentpage.css';
import Comment from '../components/Comment';

const commentsArr = [
  {
    title:
      'Comment one title Comment one title Comment one title Comment one title',
    text:
      'Comment one text Comment one text Comment one text Comment one text ',
    rated: 1,
    viewOnly: true,
  },
  {
    title:
      'Comment two title Comment two title Comment two title Comment two title',
    text: 'Comment two text Comment two text Comment two text Comment two',
    rated: 2,
    viewOnly: false,
  },
  {
    title: 'Comment three title',
    text:
      'Comment three text Comment three text Comment three text Comment three',
    rated: 3,
    viewOnly: true,
  },
  {
    title: 'Comment four title',
    text: 'Comment four text Comment four text Comment four text Comment four',
    rated: 4,
    viewOnly: false,
  },
  {
    title: 'Comment five title',
    text: 'Comment five text Comment five text Comment five text Comment five',
    rated: 5,
    viewOnly: true,
  },
];

function CommentPage() {
  return (
    <div className="comment__page">
      <div className="comment__container">
        <section className="comment__section comment__title-section">
          <h1>Please leave a comment below</h1>
        </section>
        <section className="comment__section comment__comments-section">
          {commentsArr.map(({ title, text, rated, viewOnly }) => (
            <Comment
              key={title}
              title={title}
              text={text}
              rated={rated}
              viewOnly={viewOnly}
            />
          ))}
        </section>
      </div>
    </div>
  );
}
export default CommentPage;
