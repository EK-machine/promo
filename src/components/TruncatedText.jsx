import React from 'react';
import './truncatedtext.css';

function TruncatedText({ summary, visible }) {
  return visible ? (
    <p className="text__container-visible">{summary}</p>
  ) : (
    <p className="text__container-unvisible">{summary}</p>
  );
}

export default TruncatedText;
