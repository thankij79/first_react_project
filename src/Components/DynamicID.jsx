import React from "react";
import "../Styles/components/DigitalId.css";

const DynamicID = (id, name, position, age) => {
  return (
    <>
      <div className="id-card">
        <div className="input-group">
          <label htmlFor="dynamic-name">Enter Name Here:</label>
          <input
            id="dynamic-name"
            type="text"
            placeholder="Enter name here..."
            value={name}
          />
        </div>
        <div className="input-group">
          <label htmlFor="dynamic-position">Enter Position Here:</label>
          <input
            id="dynamic-position"
            type="text"
            placeholder="Enter position here..."
            value={position}
          />
        </div>
        <div className="input-group">
          <label htmlFor="dynamic-age">Enter Age Here:</label>
          <input
            id="dynamic-age"
            type="number"
            placeholder="Enter age here..."
            value={age}
          />
        </div>
        <div className="actions">
          <>
            <button className="new">ADD</button>
            <button>EDIT</button>
            <button className="delete">DELETE</button>
          </>
        </div>
      </div>
    </>
  );
};

export default DynamicID;
