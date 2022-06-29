import React, { useState } from "react";
import Inputarea from "./Inputarea";
import Todoitem  from "./Todoitem";

function App() {
  const [state, setstate] = useState("");

  const [item, setitem] = useState([]);

  function handlechange(event) {
    setstate(event.target.value);
  }

  function additem() {
    setitem((prevvalue) => {
      return [...prevvalue, state];
    });
    setstate("");
  }

  function deleteitems() {
    setitem([]);
  }

  function deleteitem(id) {
    setitem((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <Inputarea add={additem} delete={deleteitems} change={handlechange} text={state} />
      <div>
        <ul>
          {item.map((todo,index) => (
            <Todoitem key={index} id={index} text={todo} onChecked={deleteitem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
