import React, { useState, useRef } from 'react';
import { Switch, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import './maincontentcontainer.css';
import HomePage from './HomePage';
import CommentPage from './CommentPage';
import CareerPage from './CareerPage';
import NotFoundPage from './NotFoundPage';

function MainContentContainer() {
  const [scroll, setScroll] = useState(0);
  const heightRef = useRef();

  const scrollHandler = () => {
    const pageScroll = heightRef.current.scrollTop;
    const height =
      heightRef.current.scrollHeight - heightRef.current.clientHeight;
    const scrolled = (pageScroll / height) * 100;
    setScroll((prevState) => {
      if (prevState === scrolled) {
        return prevState;
      }
      return scrolled;
    });
  };

  return (
    <div className="grid__main-container">
      <div className="grid__header">
        <Header />
      </div>
      <div className="grid__sidebar">
        <Sidebar />
      </div>
      <div
        className="grid__main-content"
        onScroll={scrollHandler}
        ref={heightRef}
      >
        <Switch>
          <Route path="/main/home" component={HomePage} />
          <Route path="/main/comment" component={CommentPage} />
          <Route path="/main/career">
            <CareerPage scroll={scroll} />
          </Route>
          <Route path="/main/*" component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  );
}

export default MainContentContainer;
