import React, { useState, useEffect } from 'react';
import './commentpage.css';
import BeatLoader from 'react-spinners/BeatLoader';
import Comment from '../components/Comment';
import reviewService from '../components/serverService.js';

function CommentPage() {
  const [isCommentLoaded, setIsCommentLoaded] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    reviewService
      .getAll()
      .then((result) => {
        setIsCommentLoaded(true);
        setFetchedData(result);
        setError(null);
      })
      .catch((err) => {
        setIsCommentLoaded(false);
        setError(err.message);
      });
  }, []);
  return (
    <div className="comment__page">
      <div className="comment__container">
        <section className="comment__title-section">
          {isCommentLoaded ? (
            <h1 className="comment__title">Comments</h1>
          ) : (
            <h1 className="comment__title">Loading...</h1>
          )}
        </section>
        <section className="comment__comments-section">
          {isCommentLoaded ? (
            <div className="comment__comments-section_is-loaded">
              {fetchedData.map(
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
              {error && <div className="comment__fetch-error">{error}</div>}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
export default CommentPage;
