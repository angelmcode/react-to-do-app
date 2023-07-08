import React from 'react'
import '../stylesheets/todo.css'

function Todo({ id, text, complete, todoComplete, deleteTodo }) {

  return (
    <div className={complete ? 'complete1' : "container-todo"}>
        <div className={complete ? 'complete2' : "todo-text"} onClick={ () => todoComplete(id) }>
            {text}
        </div>
        <div className='todo-icon' onClick={ () => deleteTodo(id) }>
          X
        </div>
    </div>
  )
};

export default Todo