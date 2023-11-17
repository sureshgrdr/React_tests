import { useState } from "react";

function HookStateObjects() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  function handleClear() {
    setName({ firstName: "", lastName: "" });

    document.querySelector(".fname").value = "";
    document.querySelector(".lname").value = "";
  }

  return (
    <div className="component">
      <h2>UseState with Objects</h2>
      <br />
      <p>{`${name.firstName} ${name.lastName}`}</p>
      <br />
      <div>
        <input type="text" className="textBox fname" placeholder="firstname" onChange={(evnt) => setName({ ...name, firstName: evnt.target.value })} />
        <input type="text" className="textBox lname" placeholder="lastname" onChange={(evnt) => setName({ ...name, lastName: evnt.target.value })} />
        <button className="btn" onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default HookStateObjects;
