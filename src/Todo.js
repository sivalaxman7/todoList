import React from "react";
function Todo({ todo, index, completeTodo, removeTodo }) {
    return (
      <div
        className="todo">
        <span id={index} >{todo.text}</span>
        <span id="sppan">
        <input className="long" type="checkbox" onChange={() => document.getElementById(index).classList.toggle("cross")}/>
        <button onClick={() => removeTodo(index)}>x</button>
        </span>
      </div>
    );
  }
  export default Todo; 