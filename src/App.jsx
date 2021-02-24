import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
// import logo from './logo.svg';
import PageContainer from './pages/PagesContainer';
import Sidebar from './sidebar/Sidebar';

library.add(fab, faCheckSquare, faCoffee);

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          CI/CD Works!
        </a>
      </header> */}
      <Sidebar />
      <PageContainer />
    </div>
  );
}

export default App;
