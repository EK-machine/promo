import React, { useEffect } from 'react';
import './commentpage.css';
import Comment from '../components/Comment';
import reviewService from '../components/serverService.js';

let commentsArr = [];

function CommentPage() {
  useEffect(() => {
    reviewService.getAll().then((result) => {
      commentsArr = result;
      console.log(commentsArr);
      return commentsArr;
    });
  }, []);
  return (
    <div className="comment__page">
      <div className="comment__container">
        <section className="comment__section comment__title-section">
          <h1>Please leave a comment below</h1>
        </section>
        <section className="comment__section comment__comments-section">
          {commentsArr.map(
            ({ summary, text, rating, viewOnly, username, id }) => (
              <Comment
                key={id}
                summary={summary}
                text={text}
                rating={rating}
                viewOnly={viewOnly}
                username={username}
              />
            ),
          )}
        </section>
      </div>
    </div>
  );
}
export default CommentPage;
