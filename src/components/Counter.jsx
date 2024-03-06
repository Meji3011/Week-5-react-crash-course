import React, { useState } from "react";

function Counter() {
  const [arr, setArr] = useState([])

  function addPlus() {
    setArr((prevArr) => [...prevArr, "+"]);
  }
  function addMinus() {
    setArr((prevArr) => [...prevArr, "-"])
  }
  function resetArr() {
    setArr([])
  }
  return (
    <div>
      <button onClick={addMinus}>-</button>
      <button onClick={addPlus}>+</button>
      <button onClick={resetArr}>Reset</button>
      {arr.toString()}
    </div>
  );
}

export default Counter;
