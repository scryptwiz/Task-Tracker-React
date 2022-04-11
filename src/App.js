import './App.css';
import {useState} from 'react'
// import {useEffect} from 'react'
import Header from './components/Header' 
import Tasks from './components/Tasks';
import Message from './components/Message';
import AddTask from './components/AddTask';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])


  // With db.json as backend

  // useEffect(()=>{
  //   const getTasks = async ()=>{
  //       const tasksFromServer = await fetchTasks()
  //       setTasks(tasksFromServer)
  //     }

  //     getTasks()
  // }, [])

  // // Fetch Tasks
  // const fetchTasks = async ()=>{
  //   const res = await fetch('http://localhost:5000/tasks')
  //   const data = await res.json()

  //   console.log(data)
  //   return data
  // }

  // // Fetch Tasks
  // const fetchTask = async (id)=>{
  //   const res = await fetch(`http://localhost:5000/tasks/${id}`)
  //   const data = await res.json()

  //   return data
  // }

  // // Add Task
  // const addTask = async (task) => {
  //   const res = await fetch('http://localhost:5000/tasks', {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify(task),
  //   })

  //   const data = await res.json()

  //   setTasks([...tasks, data])

  // }

  // // delete task
  // const deleteTask= async (id)=>{
  //   await fetch(`http://localhost:5000/tasks/${id}`, {
  //     method: 'DELETE'
  //   })

  //   setTasks(tasks.filter((task)=>task.id !== id))
  // }

  // // reminder
  // const reminder= async (id)=>{
  //   const taskToToggle = await fetchTask(id)
  //   const updTask = {...taskToToggle, reminder: !taskToToggle.reminder} 

  //   const res = await fetch(`http://localhost:5000/tasks/${id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-type': 'application/json'
  //     },
  //     body: JSON.stringify(updTask)
  //   })

  //   const data = await res.json()
  

  //   setTasks(tasks.map((task)=>
  //   task.id==id ? {...task, reminder: data.reminder}:task))
  // }



  // With React State


  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) +1;
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
    console.log(tasks);
  }

  // delete task
  const deleteTask= (id)=>{
    setTasks(tasks.filter((task)=>task.id !== id))
  }

  // reminder
  const reminder= (id)=>{
    setTasks(tasks.map((task)=>
    task.id===id ? {...task, reminder: !task.reminder}:task))
  } 


  return (
    <div className='flex flex-col justify-center items-center h-screen md:bg-gray-900 bg-gray-800'>
      <div className='md:w-2/5 xl:w-2/6 w-full md:max-h-screen pl-10 pr-2 py-7 bg-gray-800'>
        <div className='w-full h-full md:block flex flex-col justify-center overflow-y-auto pr-8'>
          <Header onAdd={()=>setShowAddTask(!showAddTask)} showAddTask={showAddTask}/>
          {showAddTask && <AddTask onAddTask={addTask}/>}
          {tasks.length > 0 ? 
          <Tasks tasks={tasks} onDelete={deleteTask} onReminder={reminder}/> :<Message/>
        }
        </div>
      </div>
    </div>
  );
}

// md:block flex flex-col justify-center
// md:max-h-96

export default App;
