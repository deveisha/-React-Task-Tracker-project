import React from 'react'
import TaskItem from './TaskItem'


const Tasks = (props) => {
   
  return (
    <>
      {props.tasks.map((tasks)=>(
        <TaskItem key={props.index} TaskItem={tasks} onDelete={props.onDelete} onToggle={props.onToggle}/>
      ))}
    </>
  )
}

export default Tasks
