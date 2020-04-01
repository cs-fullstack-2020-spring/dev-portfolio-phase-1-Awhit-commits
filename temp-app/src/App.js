import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage';
import LeftBar from './Components/LeftBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomePage/>
        {/* <LeftBar/> */}
      </header>
    </div>
  );
}

export default App;
