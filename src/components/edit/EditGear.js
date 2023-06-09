import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import "../../stylesheets/EditPopup.css";

export default function EditGear(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDelete = () => {props.handleRemoveGear(gear.name); setShow(false) }

    let gear = {
        "name" : props.name,
        "oldName": props.name
    }
    const saveAndClose = () => {
        props.handleGearChange(gear)
        setShow(false);
    }
    
  return (
    <>
        <FontAwesomeIcon icon={faPenToSquare} className='edit-icon' onClick={handleShow} />
        <Modal show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
            <Modal.Header>
                <Modal.Title>{props.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input type='text' defaultValue={gear.name} className='form-control' onChange={(event) => {
                    gear.name = event.target.value;
                }}/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose}>Close</Button> <Button className='btn btn-light' onClick={saveAndClose}>Save</Button><Button className='btn btn-danger' onClick={handleDelete}>Delete</Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}
