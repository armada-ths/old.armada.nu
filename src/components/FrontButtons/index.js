import React from 'react'
import './index.scss';

const Jumbotron = (props) => {

  return(
    <div>
      <form  id='submitForm' method='get' action='https://event.armada.nu/sv/event/3994' target='blank'>
        <button className='virtualbutton'>Register for the fair</button>
      </form>
      <form id='submitForm' method='get' action='https://armada.nu/forStudents'>
        <button className='virtualbutton'>More Info</button>
      </form>
    </div>
  )
}

export default Jumbotron;