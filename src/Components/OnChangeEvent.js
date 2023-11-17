//OnChange Event
import { useState } from "react";
import ColorBox from "./ColorBox";

function OnChangeEvent() {
  let [change, setChanges] = useState("pink");

  function handleChange(event) {
    setChanges(event.target.value);
  }

  function handleReset() {
    document.querySelector(".changeBox").value = "";
    setChanges("");
  }
  return (
    <div className='component'>
      <h2>OnChange Event</h2>
      <br />
      <input className='textBox changeBox' type='text' placeholder='type here' onChange={handleChange} />
      <button className='btn' onClick={handleReset}>
        Reset
      </button>
      <br />
      <br />
      <h3>Display Change: {change}</h3>
      <ColorBox color={change} />
    </div>
  );
}

export default OnChangeEvent;
