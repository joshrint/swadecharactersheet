import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons';

export default function EditRippertech(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDelete = () => {props.handleRemoveRippertech(rippertech.name); setShow(false)}

    let rippertech = {
        "name" : props.name,
        "benefit": props.benefit
    }
    const saveAndClose = () => {
        props.handleRipperTechChange(rippertech)
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
                    <label>Benefit</label>
                    <textarea rows={5} className='form-control' name="description" defaultValue={rippertech.benefit} onChange={(event) =>{
                        rippertech.benefit = event.target.value;
                    }}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button> <Button className='btn btn-light' onClick={saveAndClose}>Save</Button><Button className='btn btn-danger' onClick={handleDelete}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </>
  )
}
