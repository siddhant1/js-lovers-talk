import React from "react";
import ReactDOM from "react-dom";
import Counter from "./counter.jsx";

import "./styles.css";

function App() {
  return (
    <div className="App container2">
      {/* <img
        style={{ height: "150px" }}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png"
      />
      <h1>Flash Intro to React Hooks</h1>

      <h2>@dev_siddhant</h2> */}
      <Counter />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
