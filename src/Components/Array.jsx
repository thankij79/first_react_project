import React from "react";

const colors = ["red", "green", "blue", "yellow", "purple"];

const Array = () => {
  return (
    <div>
      <h1>Color Array</h1>
      {colors.map((color, index) => (
        <li key={index}>{color}</li>
      ))}
    </div>
  );
};
export default Array;
