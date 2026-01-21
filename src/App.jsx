import React from "react";
import DigiId from "./components/DigiId";
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
    </div>
  );
};

export default App;
