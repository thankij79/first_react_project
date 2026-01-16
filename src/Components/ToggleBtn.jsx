import React, { useState, useEffect } from "react";
import "./ToggleBtn.css";

const ToggleBtn = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    console.log("Current Theme", theme);
    document.body.className = theme;
  }, [theme]);

  const onToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");

    // if (theme === "light") {
    //   setTheme("dark");
    // } else {
    //   setTheme("light");
    // }
  };

  return (
    <>
      <button onClick={onToggle}>{theme}</button>
      <h1>Theme Is {theme}</h1>
    </>
  );
};

export default ToggleBtn;
