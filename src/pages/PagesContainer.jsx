import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

import HomePage from './HomePage';
import CommentPage from './CommentPage';
import NotFoundPage from './NotFoundPage';

function PagesContainer() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/comment" component={CommentPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default PagesContainer;
