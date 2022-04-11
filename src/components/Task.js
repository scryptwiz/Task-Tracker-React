import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, onReminder}) => {
  return (
    <div className={`bg-gray-300 px-3 py-2 rounded mt-4 ${task.reminder?'border-l-4 border-green-500': ''}`} onDoubleClick={()=>onReminder(task.id)}>
      <div className='flex items-center justify-between'>
          <h3>{task.text}</h3> 
          <div className='flex items-center'>
              <FaTimes className='text-red-700 cursor-pointer' onClick={()=>onDelete(task.id)}/>
          </div>
        </div>
      <p className='text-xs'>{task.day}</p>
    </div>
  )
}

export default Task