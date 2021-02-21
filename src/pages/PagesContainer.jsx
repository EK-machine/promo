import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import CommentPage from './CommentPage';
import PageNotFound from './PageNotFound';

const PromoRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/comment">
        <CommentPage />
      </Route>
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
  </Router>
);

export default PromoRouter;
