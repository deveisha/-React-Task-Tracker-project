import React from 'react'
import {FaTimes} from 'react-icons/fa'

const TaskItem = ({TaskItem,onDelete,onToggle}) => {
  return (
    <div className={`TaskItem ${TaskItem.reminder ? 'reminder' : ''}`}
    onDoubleClick={()=>onToggle(TaskItem.id)}>
        <h3>{TaskItem.text} 
       <FaTimes style={{color:'red'}}
        onClick={()=>onDelete(TaskItem.id)}
        />
        </h3>
        <p>{TaskItem.day}</p>
      
    </div>
  )
}

export default TaskItem
