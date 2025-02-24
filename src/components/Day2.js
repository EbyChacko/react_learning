import { useState } from 'react';

export default function Day2() {
    const [count, setCount] = useState(0);

    return (
        <div className="wrapper">
            <h4 className="days">Day 2</h4>
            <h2>Counter</h2>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>  
    );
}