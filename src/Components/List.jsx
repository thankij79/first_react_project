import React from "react";

function List() {
  const user = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Jenil" },
    { id: 3, name: "Jeet" },
  ];
  return (
    <div>
      <h1>List Of User</h1>
      <ul>
        {user.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default List;
