import React from 'react';

function TruncatedText({ summary }) {
  return summary && summary.length > 50 ? (
    <p className="text__container">{summary.substr(0, 49)}...</p>
  ) : (
    <p className="text__container"> </p>
  );
}

export default TruncatedText;
