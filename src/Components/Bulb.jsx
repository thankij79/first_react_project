import React,{useState} from 'react'
import "./Bulb.css"

const Bulb = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleBulb = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="bulb-container">
      <div className={`bulb ${isOn ? 'on' : 'off'}`} />
      
      <button onClick={toggleBulb} className="toggle-button">
        {isOn ? 'Switch Off' : 'Switch On'}
      </button>
    </div>
  );
}

export default Bulb