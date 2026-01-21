import React from "react";
const scores = [10, 50, 90, 30, 100];
const ArrayNum = () => {
  const highScores = scores.filter((score) => score > 50);
  return <div>{highScores.join(", ")}</div>;
};

export default ArrayNum;
