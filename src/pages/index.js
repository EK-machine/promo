import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './home-page';
import CommentPage from './comment-page';
import PageNotFound from './page-not-found';

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
