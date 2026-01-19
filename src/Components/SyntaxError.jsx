import React, { useState } from "react";

function App() {
  const [likes, setLikes] = useState(0);

  function addLike() {
    setLikes(likes + 1);
  }

  return (
    <>
      <h1>My Photo App</h1>
      <div className="card">
        <img src="https://via.placeholder.com/150" alt="Placeholder" />
        <p>Total Likes: {likes}</p>
        <button onClick={addLike}>Like Photo</button>
      </div>
    </>
  );
}
export default App;
