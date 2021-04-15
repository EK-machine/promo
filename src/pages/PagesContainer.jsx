import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import StartPage from './StartPage';
import Header from '../components/Header';
import './pagescontainer.css';
import HomePage from './HomePage';
import CommentPage from './CommentPage';
import NotFoundPage from './NotFoundPage';

function PagesContainer() {
  return (
    // <BrowserRouter>
    //   <Switch>
    //     <div className="grid__start-container">
    //       <StartPage />
    //     </div>
    //     <div className="grid__main-container">
    //       <div className="grid__header">
    //         <Header />
    //       </div>
    //       <div className="grid__sidebar">
    //         <Sidebar />
    //       </div>
    //       <div className="grid__main-content">
    //         <Switch>
    //           <Route exact path="/home" component={HomePage} />
    //           <Route exact path="/comment" component={CommentPage} />
    //           <Route path="*" component={NotFoundPage} />
    //         </Switch>
    //       </div>
    //     </div>
    //   </Switch>
    // </BrowserRouter>

    <BrowserRouter>
      <div className="grid__start-container">
        <StartPage />
      </div>
      <div className="grid__main-container">
        <div className="grid__header">
          <Header />
        </div>
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
      </div>
    </BrowserRouter>
  );
}

export default PagesContainer;
