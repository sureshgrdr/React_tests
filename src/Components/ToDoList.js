import { useEffect, useRef, useState } from "react";

function ToDoList() {
  let [listItems, setListItmes] = useState([]);
  let inputRef = useRef();

  useEffect(() => inputRef.current.focus());

  //Add Items
  function addItems() {
    //Get Input Value
    let item = document.querySelector(".itemList").value;

    //Convert values to Poroper Lines
    item = item.slice(0, 1).toUpperCase() + item.slice(1).toLowerCase();
    setListItmes([...listItems, item]);

    //Clear Input field
    document.querySelector(".itemList").value = "";
  }
  //Add using Enter
  function keyDown(event) {
    event.key === "Enter" && addItems();
  }
  ///////////////////////////////////////////////////////////////////////////////
  //Remove Items
  function removeItems(index) {
    setListItmes(listItems.filter((words, key) => key !== index));
  }
  //Remove All Items
  function removeAll() {
    setListItmes([]);
  }

  return (
    <div className="component">
      <h2>To-Do List</h2>
      <br />
      <input type="text" className="textBox itemList" placeholder="add to list" onKeyDown={(event) => keyDown(event)} ref={inputRef} />
      <button className="btn" onClick={addItems}>
        Add
      </button>
      <button className="btn" onClick={removeAll}>
        Clear All
      </button>
      <div>
        {listItems.map((value, index) => (
          <li key={index}>
            {index + 1}: {value}
            <button className="btn removeBtn" onClick={() => removeItems(index)} title="Remove">
              -
            </button>
          </li>
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
