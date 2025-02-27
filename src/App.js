
import './App.css';
import { Day2 } from './components/Day2.js';
import  Day3  from './components/Day3.js';
import Day4 from './components/Day4.js';
import Day5 from './components/Day5.js';
import Day6 from './components/Day6.js';

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
      </header>
    </div>
  );
}

export default App;
