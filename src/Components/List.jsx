import React from "react";

const List = () => {
  const user = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Jenil" },
    { id: 3, name: "Jeet" },
  ];
  return (
    <div>
      <h1>List Of User</h1>
      {user.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </div>
  );
};

export default List;
