import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import EditFooterButtons from './tools/EditFooterButtons';

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
            <FontAwesomeIcon icon={faPenToSquare} className='accordion-edit-icon' onClick={handleShow} />
            <Modal show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}>
                <Modal.Header>
                    <Modal.Title>{props.name}</Modal.Title><button onClick={handleClose} className='btn btn-outline-secondary btn-xs close-btn'>X</button>
                </Modal.Header>
                <Modal.Body>
                    <label>Benefit</label>
                    <textarea rows={5} className='form-control' name="description" defaultValue={rippertech.benefit} onChange={(event) =>{
                        rippertech.benefit = event.target.value;
                    }}/>
                </Modal.Body>
                <Modal.Footer>
                    <EditFooterButtons handleDelete={handleDelete} saveAndClose={saveAndClose} />    
                </Modal.Footer>
            </Modal>
        </>
  )
}
