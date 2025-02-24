import { useState } from 'react';

export default function Day2() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    return (
        <div className="wrapper">
            <h4 className="days">Day 2</h4>
            <h2>Counter</h2>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button><br></br>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <p className='day2Name'>{name}</p>
        </div>  
    );
}