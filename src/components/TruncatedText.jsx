import React from 'react';

function TruncatedText({ text }) {
  return text.length > 50 ? (
    <p className="text__container">{text.substr(0, 49)}...</p>
  ) : (
    <p className="text__container">{text}</p>
  );
}

export default TruncatedText;
