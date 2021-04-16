import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import PageContainer from './pages/PagesContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <PageContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
