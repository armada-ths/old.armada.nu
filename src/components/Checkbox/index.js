import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'


const Checkbox = (props) => {

  return (<div className='checkbox-container'>
    <div className={`checkbox ${props.selected ? 'selected' : ''}`} onClick={props.onClick}>
          
    </div>
    <span>
        {props.children} 
    </span>
  </div>
  )
}

Checkbox.propTypes = {
}

export default Checkbox
