import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import "../../stylesheets/EditPopup.css";


export default function AddGear(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let gear = "";
    const saveAndClose = () => {
        props.handleAddGear(gear)
        setShow(false);
    }
  return (
    <>
        <FontAwesomeIcon icon={faPlus} className='add-icon' onClick={handleShow} />
            <Modal show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}>
                <Modal.Header>
                    <Modal.Title>Add Gear</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label>Name</label>
                    <input type='text' className='form-control' placeholder='Edge Name' onChange={(event) =>{gear = event.target.value}} />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button> <Button className='btn btn-light' onClick={saveAndClose}>Save</Button>
                </Modal.Footer>
            </Modal>
    </>
  )
}
