
import React from 'react';
import './App.css';
import { Day2 } from './components/Day2.js';
import  Day3  from './components/Day3.js';
import Day4 from './components/Day4.js';
import Day5 from './components/Day5.js';
import Day6 from './components/Day6.js';
import Day10 from './components/Day10.js';
import Day11 from './components/Day11.js';
import Day12 from './components/Day12.js';
import Day13 from './components/Day13.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='heading'>30 Days React Learning Challenge</h1>
        <Day2 name="Eby Chacko" role="Full-Stack Developer" />
        <Day3 />
        <Day4 />
        <Day5 />
        <Day6 />
        <Day10 />
        <Day11 />
        <Day12 />
        <Day13 />
      </header>
    </div>
  );
}

export default App;
