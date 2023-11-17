import { useEffect, useState } from "react";

function HookUseEffect() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    document.querySelector(".countBox").placeholder = count;
  });

  return (
    <div className="component">
      <h2>UseEffect</h2>
      <br />
      <input type="text" className="textBox countBox" placeholder="count" disabled />

      <button className="btn" onMouseEnter={() => setCount(count + 1)} onClick={() => setCount(count + 1)}>
        {`Count: ${count}`}
      </button>
      <button className="btn" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default HookUseEffect;
