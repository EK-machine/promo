import React from 'react';

const LETTERS_OVERRUN = 50;

function TruncatedText({ summary }) {
  const truncateText = () => summary.substr(0, LETTERS_OVERRUN - 1);
  return summary && summary.length > LETTERS_OVERRUN ? (
    <p className="text__container">{truncateText}...</p>
  ) : (
    <p className="text__container">{summary}</p>
  );
}

export default TruncatedText;
