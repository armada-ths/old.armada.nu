import React from "react";
import {ReactPageClick} from 'react-page-click';


import "./modal.scss";


const Modal = ({onClose, ...rest}) => (
      <div className='popupcontainer'>
        <div className="shade" onClick={onClose} >
          <div className='shadecontent'>
            <p className='cross'>˟</p>
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
