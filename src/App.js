import React from 'react';
import './styles/global.css'
import './styles/body.css'

export default function App() {
  document.title = `expo2025`;
  return (
    <div className="container">
      wrapper area
      <div className="core"></div>

      <div className="MainMeat MainMeatOne"></div>
      <div className="WhiteEye WhiteEyeOne"></div>
      <div className="blueEye blueEyeOne"></div>
    </div>
  );
}

