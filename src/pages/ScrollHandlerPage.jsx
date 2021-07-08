import React, { useState, useRef } from 'react';

function ScrollHandlerPage() {
  const [scrolling, setScrolling] = useState(0);
  const heightRef = useRef();

  const scrollHandler = () => {
    const pageScroll = heightRef.current.scrollTop;
    const height =
      heightRef.current.scrollHeight - heightRef.current.clientHeight;
    const scrolled = (pageScroll / height) * 100;
    setScrolling((prevState) => {
      if (prevState === scrolled) {
        return prevState;
      }
      return scrolled;
    });
  };
  return (
    <div onScroll={scrollHandler} ref={heightRef}>
      1
    </div>
  );
}

export default ScrollHandlerPage;
