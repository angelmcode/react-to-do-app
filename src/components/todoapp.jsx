import React from 'react'
import '../stylesheets/todoapp.css'
import TodoForm from './todoform.jsx'
import Todo from './todo'
import { useState } from 'react'

function Todoapp() {

  const [todo, setTodo] = useState([]);

  const addTodo = (todo1) => {
    console.log("before:" + todo1.text.trim());
    if (todo1.text.trim()) {
      todo1.text = todo1.text.trim();
      const todoUpdated = [todo1, ...todo];
      setTodo(todoUpdated);
    }
    console.log("task added")
    console.log("this is todo:" + todo);
  };

  const deleteTodo = (id) => {
    const todoUpdated = todo.filter((todo1) => {
      return todo1.id !== id
    }
    );
    setTodo(todoUpdated);
  };

  const todoComplete = (id) => {
    const todoUpdated = todo.map(todo1 => {
      if (todo1.id === id) {
        todo1.complete = !todo1.complete
      }
      return todo1;
    });
    setTodo(todoUpdated);
  };

  return (
    <div className='container-todoapp'>
        <h2>To Do</h2>
        <TodoForm onSubmit={addTodo} />
    <div className='container-todo-list'>
      {
        todo.map(
          (todo) => <Todo
          key={todo.id}
          id={todo.id}
          text={todo.text}
          complete={todo.complete}
          deleteTodo={deleteTodo}
          todoComplete={todoComplete}
          />
        )
      }
    </div>
    </div>
  )
};

export default Todoapp