// 1: Create Component
import React, { useState } from "react";

const Bulb = () => {
  const [isOn, setisOn] = useState(false);
  const onClick = () => {
    setisOn(!isOn);
  };
  return (
    <>
      <div
        style={{
          borderRadius: "50%",
          backgroundColor: isOn ? "yellow" : "grey",
          height: "50px",
          width: "50px",
        }}
      ></div>
      <button onClick={onClick}>{isOn ? "SwitchOff" : "SwitchOn"}</button>
    </>
  );
};

export default Bulb;
