import React, { useState, useRef } from 'react';
import './scrollhandlerpage.css';
import CareerPage from './CareerPage';

function ScrollHandlerPage() {
  const [scrolling, setScrolling] = useState(0);
  const scrollRef = useRef();

  const scrollHandler = () => {
    const pageScroll = scrollRef.current.scrollTop;
    const height =
      scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
    const scrolled = (pageScroll / height) * 100;
    setScrolling((prevState) => {
      if (prevState === scrolled) {
        return prevState;
      }
      return scrolled;
    });
  };
  return (
    <div className="scroll__container" onScroll={scrollHandler} ref={scrollRef}>
      <CareerPage scrolling={scrolling} />
    </div>
  );
}

export default ScrollHandlerPage;
