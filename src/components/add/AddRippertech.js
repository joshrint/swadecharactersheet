import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import "../../stylesheets/EditPopup.css";
import AddFooterButtons from './tools/AddFooterButtons';


export default function AddRippertech(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let rippertech = {
        "name" : props.name,
        "benefit": props.benefit
    }
    const saveAndClose = () => {
        props.handleAddRippertech(rippertech)
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
                    <Modal.Title>Add Rippertech</Modal.Title><button onClick={handleClose} className='btn btn-outline-secondary btn-xs close-btn'>X</button>
                </Modal.Header>
                <Modal.Body>
                    <label>Name</label>
                    <input type="text" className='form-control' onChange={(event) =>{rippertech.name = event.target.value}} />
                    <label>Benefit</label>
                    <textarea rows={5} className='form-control' name="description"  onChange={(event) =>{rippertech.benefit = event.target.value;}}/>
                </Modal.Body>
                <Modal.Footer>
                    <AddFooterButtons saveAndClose={saveAndClose} />
                </Modal.Footer>
        </Modal>
        
    </>
  )
}
