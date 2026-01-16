import React from "react";
import "./Countstate.css";

export const Countstate = () => {
  const [name, setName] = React.useState("John Doe");
  const [stringArray, setStringArray] = React.useState([]);

  const handleSubmit = () => {
    if (name.trim() !== "") {
      setStringArray([...stringArray, name]);
      setName("");
    }
  };

  return (
    <div>
      <h1>Hello,{name}</h1>

      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type Something"
      />
      <button onClick={handleSubmit}>Submit</button>
      <ul>
        {stringArray.map((str, index) => (
          <li key={index}>{str}</li>
        ))}
      </ul>
    </div>
  );
};
