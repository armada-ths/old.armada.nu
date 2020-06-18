import React from "react";
import {ReactPageClick} from 'react-page-click';


import "./index.scss";


const Modal = ({onClose, ...rest}) => (
      <div className='popupcontainer'>
        <p className='cross' onClick={onClose}>˟</p>
        <div className="shade" onClick={onClose}>
          <div className='shadecontent'>
          </div>
        </div>
        <ReactPageClick notify={()=> {return}}>
          <div className="popup">
            <div className="modalcontent" {...rest} />
          </div>
        </ReactPageClick>
      </div>
    );

Modal.propTypes = {
      onClose: () => {} //function doing nothing
    };




export default Modal
