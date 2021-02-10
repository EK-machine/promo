import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './home';
import Comment from './comment';
import Error from './error';

const ReactRouterSetup = () => {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/comment">
            <Comment/>
          </Route>
          <Route path="*">
            <Error/>
          </Route>
        </Switch>
      </Router>    
    );    
};

export default ReactRouterSetup;
