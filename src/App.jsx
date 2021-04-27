import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PagesContainer from './pages/PagesContainer';

function App() {
  return (
    <BrowserRouter>
      <PagesContainer />
    </BrowserRouter>
  );
}

export default App;
