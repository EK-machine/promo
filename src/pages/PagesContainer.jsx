import React from 'react';
import { Route, Switch } from 'react-router-dom';
import StartPage from './StartPage';
import './pagescontainer.css';
import MainContentContainer from './MainContentContainer';
import NotFoundPage from './NotFoundPage';

function PagesContainer() {
  return (
    <div className="grid__start-container">
      <Switch>
        <Route exact path="/" component={StartPage} />
        <Route path="/main" component={MainContentContainer} />
        <Route path="/*" component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default PagesContainer;
