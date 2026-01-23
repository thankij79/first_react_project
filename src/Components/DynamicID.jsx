import React, { useState } from "react";
import "../Styles/components/DigitalId.css";

const DynamicID = ({
  mode = "add",
  id,
  name,
  position,
  age,
  onAdd,
  onEdit,
  onDelete,
}) => {
  const [formData, setFormData] = React.useState({
    name: name || "",
    position: position || "",
    age: age || undefined,
  });

  const [editToggle,setEditToggle] = useState(false):

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleAdd() {
    onAdd(formData);
  }

  function handleEdit() {
    onEdit(formData);

    setEditToggle(false);
  }
  function handleDelete(){
    onDelete(id);
  }

  return (
    <div className="id-card">
      <div className="input-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="input-group">
        <label>Position</label>
        <input
          type="text"
          name="position"
          value={formData.position}
          onChange={handleChange}
          required
        />
      </div>

      <div className="input-group">
        <label>Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </div>

      <div className="actions">
        {mode === "add" ? (
          <button className="new" onClick={handleAdd}>
            ADD
          </button>
        ) : (
          <>
            <button>EDIT</button>
            <button className="delete">DELETE</button>
          </>
        )}
      </div>
    </div>
  );
};
export default DynamicID;
