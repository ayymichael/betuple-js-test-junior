import React from 'react';
import { ColorsContext } from '../App';
import { PORT } from '../App';

const Color = () => {
  const { colors, setColors} = React.useContext(ColorsContext);
  const [r, setR] = React.useState(0);
  const [g, setG] = React.useState(0);
  const [b, setB] = React.useState(0);

  React.useEffect(() => {
    const timer1 = setInterval(() => {
      // console.log('изменено R')
      setR(r => r + 1)
    }, 5000);
    const timer2 = setInterval(() => {
      // console.log('изменено G')
      setG(g => g + 1)
    }, 7000);
    const timer3 = setInterval(() => {
      // console.log('изменено B')
      setB(b => b + 1)
    }, 9000);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
    }

  }, []);

  const color = {
    color_r: r,
    color_g: g,
    color_b: b
  };


  const btnClickHandler = async () => {
    await fetch(`http://localhost:${PORT}/event`, {
      method: "POST",
      body: JSON.stringify(color),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    });
    setColors([...colors, {
      r,
      g,
      b
    }]);
    console.log(colors);
  }

  return (
    <div className='color'>
      <button onClick={btnClickHandler}>Нажми меня</button>
    </div>
  );
}

export default Color;