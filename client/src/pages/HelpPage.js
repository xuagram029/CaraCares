import React from 'react'
import img3 from '../images/image3.jpg'

function HelpPage() {
  return (
    <div className='HelpPage' id='help'>
        <img src={img3} alt="Helpless Dogs" className='bg-image'/>
        <div className="HelpPage-container">
            <div className="help-text">
                <h1>Help Care for The Animals</h1>
                <p>There are countless ways you can help us in our quest for paws. <br/> You can make a donation (however big or small), join our <br/> fundraiser events, or volunteer your time and home as a foster parent.</p>
            </div>
            <div className="help-buttons">
                <button>Donate</button>
                <button>Sponsor</button>
                <button>Foster</button>
            </div>
        </div>
    </div>
  )
}

export default HelpPage