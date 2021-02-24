import React from 'react';
import './App.css';
import PageContainer from './pages/PagesContainer';
import Sidebar from './sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <PageContainer />
    </div>
  );
}

export default App;
