import React, { useState } from 'react'
import '../stylesheets/todoform.css'

function TodoForm({ onSubmit }) {

  let [input, setInput] = useState("");
  console.log(input);
  console.log(setInput);

  const manageChange = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  }

  const manageSend = (e) => {
    e.preventDefault();
    console.log("send form");

    const newTodo = {
      id: Date.now().toString(),
      text: input,
      complete: false
    }

    onSubmit(newTodo);
    console.log(newTodo);
    form.reset();
    console.log("hi" + input);
    console.log(Date.now());
  };

  return (
    <form id="form" className='container-todoform' onSubmit={manageSend}>
        <input className="todo-input" type="text" placeholder='enter a task' name='text' onChange={manageChange} />
        <button className='add-task' onClick={manageSend}>Add Task</button>
    </form>
  )
}

export default TodoForm