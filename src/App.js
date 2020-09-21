import React from 'react';
import './styles/global.css'

import './styles/MainMeat.css'
import './styles/WhiteEye.css'
import './styles/BlueEye.css'

export default function App() {
  document.title = `expo2025`;
  return (
    <div className="container">
      LIFE IS SHINING...
      <div className="MainMeat MainMeatOne"></div>
      <div className="MainMeat MainMeatTwo"></div>
      <div className="MainMeat MainMeatThree"></div>
      <div className="MainMeat MainMeatFour"></div>
      <div className="MainMeat MainMeatFive"></div>

      <div className="WhiteEye WhiteEyeOne"></div>
      <div className="WhiteEye WhiteEyeTwo"></div>
      <div className="WhiteEye WhiteEyeThree"></div>
      <div className="WhiteEye WhiteEyeFour"></div>
      <div className="WhiteEye WhiteEyeFive"></div>


      <div className="BlueEye BlueEyeOne"></div>
      <div className="BlueEye BlueEyeTwo"></div>
      <div className="BlueEye BlueEyeThree"></div>
      <div className="BlueEye BlueEyeFour"></div>
      <div className="BlueEye BlueEyeFive"></div>
    </div>
  );
}

