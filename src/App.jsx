import React from "react";
import DynamicID from "./Components/DynamicID";

const App = () => {
  const [currentId, setCurrentId] = React.useState(1);
  const [cards, setCards] = React.useState([]);

  function handleAdd(data) {
    setCards([...cards, { ...data, id: currentId }]);
    setCurrentId(currentId + 1);
  }
  function handleEdit(data) {
    setCards(cards.map((card) => (card.id === data.id ? { ...data } : card)));
  }
  function handleDelete(id) {
    setCards(cards.filter((card) => card.id !== id));
  }

  return (
    <div>
      <h2>Add New ID Card</h2>

      <DynamicID mode="add" onAdd={handleAdd} />

      <h2>Existing ID Cards</h2>

      {cards.map((card) => (
        <DynamicID
          key={card.id}
          mode="view"
          id={card.id}
          name={card.name}
          position={card.position}
          age={card.age}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default App;
