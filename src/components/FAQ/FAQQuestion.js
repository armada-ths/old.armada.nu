import React, { useState } from 'react'
import './index.scss'
import chevronDown from '../../../static/assets/pil_melon.png'
import chevronUp from '../../../static/assets/pil_melon_up.png'

const FAQQuestion = (props) => {

    const [drawerOpen, setDrawerOpen] = useState(false);

    const questionOnClicked = () => {
        setDrawerOpen(!drawerOpen)
    }

    return(<section role='presentation' className='parent' onClick={questionOnClicked}>
        <h2 aria-expanded='false'>
            {props.question}
        <img alt='' src={drawerOpen ? chevronUp : chevronDown} className='chevron' draggable='false'/>
        </h2>
        <div className='children' style={{marginTop: 0, maxHeight: drawerOpen ? '500px' : 0}} >
            <p className='answer'>{props.answer}</p>
        </div>
    </section>)
}
export default FAQQuestion