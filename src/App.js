import logo from './logo.svg';
import './App.css';
import { Day1 } from './components/Day1.js';
import  Day2  from './components/Day2.js';
import SignupForm from './components/Day3.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='heading'>30 Days React Learning Challenge</h1>
        <Day1 name="Eby Chacko" role="Full-Stack Developer" />
        <Day2 />
        <SignupForm />
      </header>
    </div>
  );
}

export default App;
