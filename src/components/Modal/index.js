import React from 'react'
// import { ReactPageClick } from 'react-page-click' Removing this
import './index.scss'
import { GrClose } from 'react-icons/gr'

const Modal = ({ onClose, ...rest }) => (
    <div className='popupcontainer'>
        {/* <div role='presentation' onClick={onClose}>
            <div className='shadecontent'></div>
        </div> */}
        <div className='popup'>
            <GrClose class='cross' onClick={onClose} />
            <div className='modalcontent' {...rest} />
        </div>
    </div>
)

Modal.propTypes = {
    onClose: () => {},
}

export default Modal
