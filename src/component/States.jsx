import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const States = () => {
  const [state, setState] = useState(0);
  //handle increment button:
  const increment = () => {
    setState(state + 1);
  };
  //handle decrement button:
  const decrement = () => {
    if (state == 0) {
      alert("Nothing to decrement !!");
    } else {
      setState(state - 1);
    }
  };
  //handle reset button:

  const reset = () => {
    if (state == 0) {
      alert("Nothing to reset. Already 0 !!");
    } else {
      setState(0);
    }
  };
  return (
    <div>
      <button className="btn btn-secondary m-2 p-3 ">
        Count is: {state}
      </button>
      <h2>States are here</h2>
      <div>
        <button className="btn btn-primary m-2 p-3 " onClick={increment}>
          {" "}increment
        </button>

        <button className="btn btn-danger m-2 p-3 " onClick={decrement}>
          Decrement
        </button>
        <button className="btn btn-warning m-2 p-3 " onClick={reset}>
          Reset{" "}
        </button>
      </div>
    </div>
  );
};

export default States;
