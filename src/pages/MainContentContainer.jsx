import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import './maincontentcontainer.css';
import HomePage from './HomePage';
import CommentPage from './CommentPage';

function MainContentContainer() {
  return (
    <Switch>
      <div className="grid__main-container">
        <div className="grid__header">
          <Header />
        </div>
        <div className="grid__sidebar">
          <Sidebar />
        </div>
        <div className="grid__main-content">
          <Route exact path="/main" component={HomePage} />
          <Route exact path="/main/comment" component={CommentPage} />
        </div>
      </div>
    </Switch>
  );
}

export default MainContentContainer;
