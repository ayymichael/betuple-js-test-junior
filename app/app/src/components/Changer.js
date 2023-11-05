import React from 'react';
import Option from './Option';
import { ColorsContext } from '../App';
import { PORT } from '../App';

const Changer = () => {
  const {colors, setColors} = React.useContext(ColorsContext);
  
  const fetchColors = async () => {
    fetch(`http://localhost:${PORT}/event`)
      .then((res) => res.json())
      .then((data) => {
        setColors(data.map((obj) => {
          return {
            r: obj.color_r,
            g: obj.color_g,
            b: obj.color_b,
          }
        }));
      });
  };

  React.useEffect(() => {
    fetchColors();
  }, []);


  return (
    <div className='changer'>
      <h2>Выбранные оттенки</h2>
      <div className='changer-body'>
        {
          colors ? colors.map((color, index) => <Option key={index} {...color} />)
          : 'вы еще не выбрали ни одного оттенка'
        }
      </div>
    </div>
  );
}

export default Changer;