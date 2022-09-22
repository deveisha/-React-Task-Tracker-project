import Tasks from './components/Tasks';
import Header from './components/Header';
import { useState } from 'react'
import AddTask from './components/AddTask';
function App() {
  const[showAddTask, setShowAddTask]=useState(false)
  const[tasks,setTasks]=useState([
    {
        'id':'1' ,
        'text':'go to university' ,
        'day': 'on tuesday 9:30 AM',
        'reminder': 'true'
    },
    {
        'id':'2' ,
        'text':'go to Masjid' ,
        'day': 'on Friday 9:30 AM',
        'reminder': 'true'
      },
      {
        'id':'3' ,
        'text':'result day' ,
        'day': 'on tuesday',
        'reminder': 'false'
      }
]
)
//Add Task
const addTask=(TaskItem)=>{
  console.log(TaskItem)
  const id=Math.floor(Math.random()*10000)+1
  const newTask={id,...TaskItem } 
  setTasks([...tasks,newTask])
}
//delete task
const deleteTask=(id)=>{
  console.log('delete',id)
 setTasks(tasks.filter((TaskItem)=>TaskItem.id!==id

 ))
}
  //toggle reminder
  const toggleReminder=(id)=>{
    console.log(id)
    setTasks(tasks.map((TaskItem)=> TaskItem.id===id?
    {...TaskItem,reminder:!TaskItem.reminder} : TaskItem
    ))

  }
  return (
    <div className="container">
  <Header onAdd={()=> setShowAddTask(!showAddTask)}  showAdd={showAddTask}/>
  { showAddTask && <AddTask onAdd={addTask}/>}
  {tasks.length>0? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>):('No Tasks yet')
  }
    </div>
  );
}

export default App;
