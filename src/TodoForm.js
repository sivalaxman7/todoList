import React from "react";
function TodoForm({ addTodo }) {
    const [value, setValue] = React.useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return value;
      addTodo(value);
      setValue("");
    };
  
    return (
      <>
      <span id="span">
      <input id="inp"
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}/>
      </span>
      <button id="button" onClick={handleSubmit}>Add</button>
        </>
    );
  };
  export default TodoForm;