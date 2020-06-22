import React from 'react';
import { ReactPageClick } from 'react-page-click';
import './index.scss';

const Modal = ({onClose, ...rest}) => (
  <div className='popupcontainer'>
    <p role='presentation' className='cross' onClick={onClose}>˟</p>
    <div role='presentation' className='shade' onClick={onClose}>
      <div className='shadecontent'>
      </div>
    </div>
    <ReactPageClick notify={()=> {return}}>
      <div className='popup'>
        <div className='modalcontent' {...rest} />
      </div>
    </ReactPageClick>
  </div>
);

export default Modal
