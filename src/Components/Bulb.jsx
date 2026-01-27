// 1: Create Component
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Bulb = () => {
  const [isOn, setisOn] = useState(false);
  const onClick = () => {
    setisOn(!isOn);
  };
  return (
    <>
      <Link to="/">Go back to ID Cards</Link>
      <div
        style={{
          borderRadius: "50%",
          backgroundColor: isOn ? "yellow" : "grey",
          height: "100px",
          width: "100px",
          transition: "background-color 3s ease",
        }}
      ></div>
      <button onClick={onClick}>{isOn ? "SwitchOff" : "SwitchOn"}</button>
    </>
  );
};

export default Bulb;
