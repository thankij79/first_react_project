import React from "react";
import DigiId from "./Components/DigiId";
import Bulb from "./Components/Bulb";
import List from "./Components/List";
const App = () => {
  return (
    <div>
      <DigiId name="Stark" age={45} role="Engineer" />
      <DigiId name="rogers" age={95} role="Captain" />
      <DigiId name="Banner" age={50} role="Scientist" />
      <Bulb />
      <List />
    </div>
  );
};

export default App;
