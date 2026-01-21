import React from "react";

const updateCars = { model: "Ferrari", color: "Red", year: 2024 };
const Cars = () => {
  const carDetails = { ...updateCars, color: "red" };
  return (
    <div>
      Model:{carDetails.model}, Color: {carDetails.color}, Year:{" "}
      {carDetails.year}
    </div>
  );
};
export default Cars;
