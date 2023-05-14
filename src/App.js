import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Mybtns() {
  const [count, setCount] = useState(0);
  function Inc() {
    setCount(count+1);
  }
  function Dec() {
    setCount(count-1);
  }
  return (
    <div class="cnt">
      <h3>COUNTER</h3>
      <h3>{count}</h3>
      <div class="btns">
        <button class="btn" onClick={Inc}>
          Increase
        </button>
        <button class="btn" onClick={Dec}>
          Descrease
        </button>
      </div>
    </div>
  )
}

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div class="container">
      <Mybtns />
    </div>
  );
}

export default App;
