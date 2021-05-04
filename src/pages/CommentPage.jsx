import React from 'react';
import './commentpage.css';
import Comment from '../components/Comment';

const commentsArr = [
  {
    title: 'Comment one title',
    text: 'Comment one text Comment one text Comment one text Comment one',
  },
  {
    title: 'Comment two title',
    text: 'Comment two text Comment two text Comment two text Comment two',
  },
  {
    title: 'Comment three title',
    text:
      'Comment three text Comment three text Comment three text Comment three',
  },
  {
    title: 'Comment four title',
    text: 'Comment four text Comment four text Comment four text Comment four',
  },
];

function CommentPage() {
  return (
    <div className="comment__page">
      <div className="comment__container">
        <section className="comment__section comment__title-section">
          <h1>Please leave a comment below</h1>
        </section>
        <section className="comment__section comment__filter-section">
          <form action="comment__filter-form">
            <label
              className="comment__filter-label"
              htmlFor="comment__filter-input"
            >
              Find comment:
              <input
                className="comment__filter-input"
                type="text"
                placeholder="filter"
                id="comment__filter-input"
              />
            </label>
          </form>
        </section>
        <section className="comment__section comment__comments-section">
          {commentsArr.map(({ title, text }) => (
            <Comment key={title} title={title} text={text} />
          ))}
        </section>
      </div>
    </div>
  );
}
export default CommentPage;
