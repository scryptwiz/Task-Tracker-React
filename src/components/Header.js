import PropTypes from 'prop-types'
import AddBtn from './AddBtn'

const Header = ({title, onAdd, showAddTask}) => {
  return (
    <header className="flex justify-between items-center">
        <h3 className="font-semibold text-2xl text-white">{title}</h3>
        {/* {!showAddTask?<AddBtn text="Add" onClick={onAdd}/>:<AddBtn text="Close" onClick={onAdd}/>} */}
        <AddBtn clas={!showAddTask?'bg-blue-700':'bg-red-700'} text={!showAddTask?"Add" : "Close"} onClick={onAdd}/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header