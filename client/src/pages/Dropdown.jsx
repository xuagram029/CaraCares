import { useState } from 'react'
import '../dropdown.css'

const Dropdown = () => {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!open)
    }
  return (
    <div className='dropdown'>
        <div className="dropdown-btn" onClick={handleClick}>Choose One</div>
        <div className="dropdown-content">
            <div className="dropdown-item hidden">REACT</div>
            <div className="dropdown-item hidden">VUE</div>
        </div>
        {open && (
            <div className="dropdown-content">
                <div className="dropdown-item">REACT</div>
                <div className="dropdown-item">VUE</div>
            </div>
        )}
    </div>
  )
}

export default Dropdown