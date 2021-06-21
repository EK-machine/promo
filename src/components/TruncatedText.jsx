import React from 'react';

function TruncatedText({ summary, lettersOverrun }) {
  const truncateText = (string) =>
    `${string.substr(0, lettersOverrun - 1)} ...`;
  return summary && summary.length > lettersOverrun ? (
    <p className="text__container">{truncateText(summary)}</p>
  ) : (
    <p className="text__container">{summary}</p>
  );
}

export default TruncatedText;
