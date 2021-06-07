import React, { useState, useEffect } from 'react';
import './commentpage.css';
import BeatLoader from 'react-spinners/BeatLoader';
import Comment from '../components/Comment';
import reviewService from '../components/serverService.js';

function CommentPage() {
  const [isCommentLoaded, setIsCommentLoaded] = useState(false);
  useEffect(() => {
    reviewService.getAll().then((result) => {
      setIsCommentLoaded(result);
      return isCommentLoaded;
    });
  }, []);
  return (
    <div className="comment__page">
      <div className="comment__container">
        <section className="comment__section comment__title-section">
          <h1>Please leave a comment below</h1>
        </section>
        <section className="comment__section comment__comments-section">
          {isCommentLoaded ? (
            <div className="comment__comments-section_is-loaded">
              {isCommentLoaded.map(
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
            </div>
          ) : (
            <div className="comment__comments-section_is-loading">
              <BeatLoader loading />
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
export default CommentPage;
