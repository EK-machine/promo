import React, { useState, useEffect } from 'react';
import './commentpage.css';
import BeatLoader from 'react-spinners/BeatLoader';
import Comment from '../components/Comment';
import reviewService from '../components/serverService.js';

function CommentPage() {
  const [isCommentLoaded, setIsCommentLoaded] = useState(false);
  const [isDataFetched, setIsDataFetched] = useState([]);

  useEffect(() => {
    reviewService.getAll().then((result) => {
      setIsCommentLoaded(true);
      setIsDataFetched(result);
    });
  }, []);
  return (
    <div className="comment__page">
      <div className="comment__container">
        <section className="comment__section comment__title-section">
          {isCommentLoaded ? (
            <h1>Comments:</h1>
          ) : (
            <h1>Please wait for comments to be loaded</h1>
          )}
        </section>
        <section className="comment__section comment__comments-section">
          {isCommentLoaded ? (
            <div className="comment__comments-section_is-loaded">
              {isDataFetched.map(
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
