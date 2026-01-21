import React from "react";

const FindUser = () => {
  const User = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
  ];
  const firstUser = User.find((user) => user.id === 3);
  return (
    <div>
      id: {firstUser.id}, name: {firstUser.name}
    </div>
  );
};

export default FindUser;
