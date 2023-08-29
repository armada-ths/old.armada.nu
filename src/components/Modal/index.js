import React from 'react'
// import { ReactPageClick } from 'react-page-click' Removing this
import './index.scss'

const Modal = ({ onClose, ...rest }) => (
    <div className='popupcontainer'>
        <p role='presentation' className='cross' onClick={onClose}>
            ˟
        </p>
        <div role='presentation' onClick={onClose}>
            <div className='shadecontent'></div>
        </div>
        <div className='popup'>
            <div className='modalcontent' {...rest} />
        </div>
    </div>
)

Modal.propTypes = {
    onClose: () => {},
}

export default Modal
