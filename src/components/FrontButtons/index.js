import React from 'react'
import './index.scss'

const FrontButtons = () => {
    return (
        <div className='front-buttons'>
            <a
                href='https://event.armada.nu/sv/event/3994'
                target='_blank'
                rel='noreferrer'
            >
                <button className='virtual-button'>
                    Register for the fair
                </button>
            </a>
            <a href='/forStudents'>
                <button className='virtual-button'>More Info</button>
            </a>
        </div>
    )
}

export default FrontButtons
