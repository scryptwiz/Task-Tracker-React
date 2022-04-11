import PropTypes from 'prop-types'

const AddBtn = ({text, onClick, clas}) => {
  return (
    <button className={`font-semibold rounded px-3 py-1.5 text-white ${clas} `} onClick={onClick}>{text}</button>
  )
}

AddBtn.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default AddBtn