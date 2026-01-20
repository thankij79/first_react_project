import React from "react";

const handleClick = () => {
  console.log("Button Clicked");

  return (
    <div>
      <h1>T5</h1>
      <button onclick={handleClick}>Click Me</button>
    </div>
  );
};

export default handleClick;
