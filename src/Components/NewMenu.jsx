import React from "react";
const oldMenu = ["Fries", "Shake"];
const NewMenu = () => {
  const newMenu = [...oldMenu, "Burger", "Pizza"];
  return <div>{newMenu.join(", ")}</div>;
};

export default NewMenu;
