import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import "../../stylesheets/EditPopup.css";


export default function AddHinderance(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let hinderance = {
        "name" : "",
        "description": ""
    }
    const saveAndClose = () => {
        props.handleAddHinderance(hinderance)
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
                    <Modal.Title>Add Hinderance</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label>Name</label>
                    <input type='text' className='form-control' placeholder='Hinderance Name' onChange={(event) =>{hinderance.name = event.target.value}} />
                    <label>Effect</label>
                    <textarea rows={5} className='form-control' name="description" placeholder="Hinderance effect" onChange={(event) =>{ hinderance.description = event.target.value;}}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button> <Button className='btn btn-light' onClick={saveAndClose}>Save</Button>
                </Modal.Footer>
            </Modal>
    </>
  )
}
