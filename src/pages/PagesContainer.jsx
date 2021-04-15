import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StartPage from './StartPage';
import NotFoundPage from './NotFoundPage';
import './pagescontainer.css';

function PagesContainer() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="grid__start-container">
          <StartPage />
        </div>
        <div>
          <Route exact path="/" component={StartPage} />
          <Route path="*" component={NotFoundPage} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default PagesContainer;
