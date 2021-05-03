import React from 'react';
import './commentpage.css';
import Comment from '../components/Comment';

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
          <Comment />
        </section>
      </div>
    </div>
  );
}
export default CommentPage;
