import React, { useState } from 'react';

export default function Day16() {
  const [backgroundColor, setBackgroundColor] = useState('#3a2853');

  function handleClick() {
    setBackgroundColor(prevColor => (prevColor === '#221a2d' ? '#3a2853' : '#221a2d'));
  }

  return (
    <div className="wrapper" style={{ backgroundColor }}>
      <h4 className="days">Day 16</h4>
      <h2>Toggle the lights</h2>
      <button onClick={handleClick}>
        Toggle the lights
      </button>
    </div>
  );
}