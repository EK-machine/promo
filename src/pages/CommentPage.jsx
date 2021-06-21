import React, { useState, useEffect } from 'react';
import './commentpage.css';
import BeatLoader from 'react-spinners/BeatLoader';
import Comment from '../components/Comment';
import reviewService from '../components/serverService.js';

function CommentPage() {
  const [isCommentLoaded, setIsCommentLoaded] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    reviewService
      .getAll()
      .then((result) => {
        setIsCommentLoaded(true);
        setFetchedData(result);
      })
      .catch((error) => console.log(error));
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
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
export default CommentPage;
