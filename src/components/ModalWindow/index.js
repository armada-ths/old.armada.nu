import React from 'react'
import Modal from 'react-modal';

const ModalWindow = (props) => {

    //Modal.setAppElement('#root');
    Modal.setAppElement(document.getElementById('root'));
    return (
        <apage id="root">
            <Modal
                isOpen={true}
                // onAfterOpen={afterOpenModal}
                // onRequestClose={closeModal}
                // style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 >Hello</h2>
                <button >close</button>
                <div>I am a modal</div>
                <form>
                    <input />
                    <button tabIndex="0">tab navigation</button>
                    <button tabIndex="0">stays</button>
                    <button tabIndex="0">inside</button>
                    <button tabIndex="0">the modal</button>
                </form>
            </Modal>
        </apage>

    )
}

export default ModalWindow
