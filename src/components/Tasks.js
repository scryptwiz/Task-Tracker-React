import Task from './Task'

const Tasks = ({tasks, onDelete, onReminder}) => {
  return (
    <>
        <div className='my-5'>
            {
            tasks.map((task)=>(
                <Task key={task.id} task={task} onDelete={onDelete} onReminder={onReminder}/>
            ))}
        </div>
    </>
  )
}

export default Tasks