import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PageContainer from './pages/PagesContainer';

function App() {
  return (
    <BrowserRouter>
      <PageContainer />
    </BrowserRouter>
  );
}

export default App;
