// useState Component
import { useState } from "react";

function IncreaseDecrease() {
  let [number, setNumber] = useState(0);

  //Increase
  function handleIncrease() {
    number >= 0 && number < 30 ? setNumber((number += 5)) : setNumber("Limit Reached");
  }

  //Decrease
  function handleDecrease() {
    number > 0 && number <= 30 ? setNumber((number -= 5)) : setNumber("Limit Reached");
  }

  //Reload
  function handleReload() {
    setNumber(0);
  }
  return (
    <div className="component">
      <h2>Increase / Decrease(range: 0 - 30)</h2>
      <br />
      <input type="text" className="textBox" placeholder={number} disabled />
      <button className="btn" onClick={handleIncrease}>
        Increase
      </button>
      <button className="btn" onClick={handleDecrease}>
        Decrease
      </button>
      <button className="btn" onClick={handleReload}>
        Reload
      </button>
    </div>
  );
}

export default IncreaseDecrease;
