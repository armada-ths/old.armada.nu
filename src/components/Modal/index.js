import React from 'react'
// import { ReactPageClick } from 'react-page-click' Removing this
import './index.scss'

const Modal = ({ onClose, ...rest }) => (
    <div className='popupcontainer'>
        {/* <div role='presentation' onClick={onClose}>
            <div className='shadecontent'></div>
        </div> */}
        <div className='popup'>
            <div role='presentation' className='cross' onClick={onClose}>
                X
            </div>
            <div className='modalcontent' {...rest} />
        </div>
    </div>
)

Modal.propTypes = {
    onClose: () => {},
}

export default Modal
