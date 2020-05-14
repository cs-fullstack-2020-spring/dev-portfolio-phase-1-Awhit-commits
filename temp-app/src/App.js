import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage';
import Navbar from './Components/NavBar';
// import LeftBar from './Components/LeftBar';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="">
      <header className="">
        <Navbar/>
        <HomePage/>
        {/* <LeftBar/> */}
        
      </header>
    </div>
  );
}

export default App;
