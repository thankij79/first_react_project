import React from "react";
import "../Styles/components/DigitalId.css";

const DynamicID = ({ mode = "add", onAdd, name, position, age, onDelete }) => {
  const [formData, setFormData] = React.useState({
    name: "",
    position: "",
    age: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleAdd() {
    if (!formData.name || !formData.position || !formData.age) return;
    onAdd(formData);
    setFormData({ name: "", position: "", age: "" });
  }

  return (
    <div className="id-card">
      <div className="input-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={mode === "add" ? formData.name : name}
          onChange={handleChange}
          disabled={mode === "view"}
        />
      </div>

      <div className="input-group">
        <label>Position</label>
        <input
          type="text"
          name="position"
          value={mode === "add" ? formData.position : position}
          onChange={handleChange}
          disabled={mode === "view"}
        />
      </div>

      <div className="input-group">
        <label>Age</label>
        <input
          type="number"
          name="age"
          value={mode === "add" ? formData.age : age}
          onChange={handleChange}
          disabled={mode === "view"}
        />
      </div>

      <div className="actions">
        {mode === "add" ? (
          <button onClick={handleAdd} className="new">
            ADD
          </button>
        ) : (
          <>
            <button>EDIT</button>
            <button onClick={onDelete} className="delete">
              DELETE
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default DynamicID;
