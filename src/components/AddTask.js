import { useState } from "react"

const AddTask = ({onAddTask}) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState('')

  const onSubmit = (e)=>{
    e.preventDefault();
    
    if(!text) {
      alert('Pls add a text')
      return
    }

    onAddTask({ text, day, reminder })

    setText('')
    setDay('')
    setReminder(false)
  }

  return (
      <form className="" onSubmit={onSubmit}>
          <div className="flex flex-col mt-5">
            <label className="text-gray-200">Task</label>
            <input className="outline-none border border-gray-400 px-3 py-1 rounded outline-none focus:border-gray-500 mt-1 bg-transparent text-gray-200" type="text" placeholder="Add Task" value={text} onChange={(e)=>setText(e.target.value)}/>
          </div>
          <div className="flex flex-col mt-5">
            <label className="text-gray-200">Day & Time</label>
            <input className="outline-none border border-gray-400 px-3 py-1 rounded outline-none focus:border-gray-500 mt-1 bg-transparent text-gray-200" type="text" placeholder="Add Day & Time" value={day} onChange={(e)=>setDay(e.target.value)}/>
          </div>
        <div className="flex items-center text-gray-200 mt-5">
            <label>Reminder</label>
            <input 
             className="ml-2 outline-none" 
             type="checkbox" 
             value={reminder} 
             checked={reminder}
             onChange={(e)=>setReminder(e.currentTarget.checked)}/>
        </div>
        <input className="w-full py-1.5 rounded bg-blue-600 font-semibold text-white mt-5 outline-none hover:bg-blue-500 text-xl" type="Submit"/>

      </form>
  )
}

export default AddTask