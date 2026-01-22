import React from "react";
import DynamicID from "./Components/DynamicID";

const App = () => {
  const [cards, setCards] = React.useState([]);

  function handleAddCard(cardData) {
    setCards([
      ...cards,
      {
        ...cardData,
      },
    ]);
  }

  function handleDeleteCard(id) {
    setCards(cards.filter((card) => card.id !== id));
  }

  return (
    <div>
      <h2>Add New ID Card</h2>

      <DynamicID mode="add" onAdd={handleAddCard} />

      <h2>Existing ID Cards</h2>

      {cards.map((card) => (
        <DynamicID
          key={card.id}
          mode="view"
          name={card.name}
          position={card.position}
          age={card.age}
          onDelete={() => handleDeleteCard(card.id)}
        />
      ))}
    </div>
  );
};

export default App;
