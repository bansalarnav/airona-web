import React from 'react';
import './styles.css';
import Navbar from "./Components/Navbar"
import Main from "./Components/Main"

function App() {
  return (
    <div className="App">
      <div className="section1">
        <Navbar />
        <Main />
      </div>
    </div>
  );
}

export default App;
