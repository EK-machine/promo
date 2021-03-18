import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import './pagescontainer.css';
import HomePage from './HomePage';
import CommentPage from './CommentPage';
import NotFoundPage from './NotFoundPage';

function PagesContainer() {
  return (
    <div className="grid__container">
      <BrowserRouter>
        <div className="grid__sidebar">
          <Sidebar />
        </div>
        <div className="grid__main-content">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/comment" component={CommentPage} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default PagesContainer;
