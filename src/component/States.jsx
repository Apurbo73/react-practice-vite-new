import React, { useState } from "react";

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
    setState(0);
  };
  return (
    <div>
      <h1>States are here</h1>
      <button onClick={increment}> increment</button>
      <button>
        {state}
      </button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset </button>
    </div>
  );
};

export default States;
