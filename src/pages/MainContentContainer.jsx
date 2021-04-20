import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import './maincontentcontainer.css';
import HomePage from './HomePage';
import CommentPage from './CommentPage';
// import NotFoundPage from './NotFoundPage';

function MainContentContainer() {
  return (
    <div className="grid__main-container">
      <div className="grid__header">
        <Header />
      </div>
      <div className="grid__sidebar">
        <Sidebar />
      </div>
      <div className="grid__main-content">
        <Switch>
          <Route path="/main/home" component={HomePage} />
          <Route path="/main/comment" component={CommentPage} />
          {/* <Route path="/main/*" component={NotFoundPage} /> */}
        </Switch>
      </div>
    </div>
  );
}

export default MainContentContainer;
