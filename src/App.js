import React from "react";
import "./App.css";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "Learn about React",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    if(newTodos[index].isCompleted ===false){
       newTodos[index].isCompleted = true;
    }else{
      newTodos[index].isCompleted = false;
    };
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
      <div className="app">
        <h1 id="h1-tag">TodoApp</h1>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>

  );
}

export default App;