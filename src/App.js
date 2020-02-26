import React from "react";
import "./App.scss";
import List from "./components/List/List.js";

import Add from "./components/Add/Add.js";

function App() {
  return (
    <div className="main">
      <div className="main__add">
        <Add />
      </div>
      <div className="main__content">
        <List label="To do" />
        <List label="In process" />
        <List label="Done" />
      </div>
    </div>
  );
}

export default App;
