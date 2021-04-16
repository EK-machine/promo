import React from 'react';
import { Route, Switch } from 'react-router-dom';
import StartPage from './StartPage';
import './pagescontainer.css';
import MainContentContainer from './MainContentContainer';

function PagesContainer() {
  return (
    <div className="grid__start-container">
      <Switch>
        <Route exact path="/" component={StartPage} />
      </Switch>
      <Switch>
        <Route path="/main" component={MainContentContainer} />
      </Switch>
    </div>
  );
}

export default PagesContainer;
