import React from 'react';
import './App.css';
import './scss/app.scss';
import Color from './components/Color';
import Changer from './components/Changer';

export const ColorsContext = React.createContext();

export const PORT = process.env.PORT || 3000;

function App() {
  const [colors, setColors] = React.useState([]);

  return (
    <div className="wrapper">
      <ColorsContext.Provider value={{colors, setColors}}>
        <Color />
        <Changer />
      </ColorsContext.Provider>
    </div>
  );
}

export default App;
