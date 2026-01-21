import React from "react";
import "./DigiId.css";

const DigiId = ({ name, age, role, HandleDelete }) => {
  return (
    <div className="digiIdContainer border-2 border-blue-500 m-8 p-8 rounded-lg bg-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-blue-950 hover:text-white">
      <h1>Name:{name}</h1>
      <h2>Age:{age}</h2>
      <h3>Role:{role}</h3>
      <button
        onClick={HandleDelete}
        className="deleteButton mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition-colors duration-300"
      >
        Delete
      </button>
    </div>
  );
};

export default DigiId;
