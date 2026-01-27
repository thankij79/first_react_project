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

  const [editToggle, setEditToggle] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleAdd() {
    onAdd(formData);
    setFormData({ name: "", position: "", age: "" });
  }

  function handleDelete() {
    onDelete(id);
  }
  function handleSave() {
    onEdit(id, formData);
    setEditToggle(false);
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
          disabled={mode !== "add" && !editToggle}
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
          disabled={mode !== "add" && !editToggle}
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
          disabled={mode !== "add" && !editToggle}
          required
        />
      </div>

      <div className="actions">
        {mode === "add" ? (
          <button className="new" onClick={handleAdd}>
            ADD
          </button>
        ) : editToggle ? (
          <button onClick={handleSave}>SAVE</button>
        ) : (
          <>
            <button onClick={() => setEditToggle(true)}>EDIT</button>
            <button className="delete" onClick={handleDelete}>
              DELETE
            </button>
          </>
        )}
      </div>
    </div>
  );
};
export default DynamicID;
