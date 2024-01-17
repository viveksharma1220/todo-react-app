import React, { useState } from 'react'


export const EditTodoForm = ({editTodo,task}) => {
    const[value,setValue]=useState(task.task);

   
    const handleSubmit = (e) => {
        // prevent default action
          e.preventDefault();
          if (value) {
            // add todo
            editTodo(value,task.id);
            // clear form after submission
            setValue('');
          }
        };

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' placeholder='update task'
         value={value} onChange={(e) => setValue(e.target.value)}/>
        <button type="submit" className='todo-btn'>Update Task</button>
    </form>
  )
}

export default EditTodoForm
