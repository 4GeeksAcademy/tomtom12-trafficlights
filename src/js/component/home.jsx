import React, { useState } from 'react';


const Home = () => {

  const [color, setColor] = useState('red');

  const handleClick = (newColor) => {
    setColor(newColor);
  };

  return (
    <div className="traffic-light">
      <div
        className={`light red ${color === 'red' ? 'active' : ''}`}
        onClick={() => handleClick('red')}
      ></div>
      <div
        className={`light yellow ${color === 'yellow' ? 'active' : ''}`}
        onClick={() => handleClick('yellow')}
      ></div>
      <div
        className={`light green ${color === 'green' ? 'active' : ''}`}
        onClick={() => handleClick('green')}
      ></div>
    </div>
  );}
export default Home;
