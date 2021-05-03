import React, { useState } from 'react';

function MyText({ placeHolder }) {
  const [isPrinted, setIsPrinted] = useState('qqq');
  return (
    <div>
      <input
        type="text"
        placeholder={placeHolder}
        onChange={(value) => {
          setIsPrinted(value);
        }}
      />
      <p>{isPrinted}</p>
    </div>
  );
}
export default MyText;
