import "./App.css";
import React from "react";
import IncreaseDecrease from "./Components/IncreaseDecrease";

import ToDoList from "./Components/ToDoList";
import FetchApi from "./Components/FetchApi";
import HookStateObjects from "./Components/HookStateObjects";
import ContextC from "./Components/HookContext/ContextA";
import FunctionComponent from "./Components/FunctionComponent";
import ClassComponent from "./Components/ClassComponent";
import OnChangeEvent from "./Components/OnChangeEvent";
import HookUseEffect from "./Components/HookUseEffect";

function Person(name, dob, job, skills) {
  this.name = name;
  this.dob = dob;
  this.job = job;
  this.skills = skills;
}

const user1 = new Person("Suresh", 1997, "VIP", ["HTML", "CSS", "JavaScript", "React"]);
// const user2 = new Person("Amala", 1999, "Model", ["Makup", "Dressing", "Cute", "Dance"]);

//Hook Context
export let UserContext = React.createContext();
export let UserContext2 = React.createContext();

//App Component
function App() {
  return (
    <div className="App">
      <FunctionComponent name={user1.name} skills={user1.skills} />
      <ClassComponent age={user1.dob} />

      <UserContext.Provider value={user1.name}>
        <UserContext2.Provider value={user1.dob}>
          <ContextC />
        </UserContext2.Provider>
      </UserContext.Provider>

      <HookStateObjects />
      <HookUseEffect />
      <OnChangeEvent />
      <ToDoList />
      <IncreaseDecrease />
      <FetchApi />
    </div>
  );
}

export default App;
