import React from "react";
import "./styles.css";
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
  }
};

function counter() {
  const [state, dispatch] = React.useReducer(reducer, { count: 0 });
  return (
    <div className="container">
      <div onClick={() => dispatch({ type: "increment" })} className="btn">
        +
      </div>
      <div className="count">{state.count}</div>
      <div onClick={() => dispatch({ type: "decrement" })} className="btn">
        -
      </div>
    </div>
  );
}

export default counter;
