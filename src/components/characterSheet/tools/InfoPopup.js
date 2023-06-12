import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';

export default function InfoPopup({name, description}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
        <span onClick={handleShow}>{name}</span>
        <Modal show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
            <Modal.Header>
                <Modal.Title>{name}</Modal.Title><button onClick={handleClose} className='btn btn-outline-secondary btn-xs close-btn'>X</button>
            </Modal.Header>
            <Modal.Body>
                {description}
            </Modal.Body>
        </Modal>
    </>
  )
}
