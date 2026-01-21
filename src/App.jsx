import React from "react";
import DigiId from "./Components/DigiId";
import NewMenu from "./Components/NewMenu";
import Cars from "./Components/Cars";
import FindUser from "./Components/FindUser";
import Array from "./Components/Array";
import ArrayNum from "./Components/ArrayNum";
const App = () => {
  const [data, setData] = React.useState([
    { id: 1, name: "John", age: 30, role: "Captain" },
    { id: 2, name: "Jane", age: 25, role: "Engineer" },
    { id: 3, name: "Doe", age: 28, role: "Member" },
  ]);

  const HandleDelete = (id) => {
    const newdata = data.filter((d) => d.id !== id);
    setData(newdata);
  };

  return (
    <div className="md:flex appContainer p-8 bg-gray-50 min-h-screen flex flex-col items-center justify-center gap-4 animate-pulse">
      {data.map((d) => (
        <DigiId
          key={d.id}
          name={d.name}
          age={d.age}
          role={d.role}
          HandleDelete={() => HandleDelete(d.id)}
        />
      ))}
      <NewMenu />
      <Cars />
      <FindUser />
      <Array />
      <ArrayNum />
    </div>
  );
};

export default App;
