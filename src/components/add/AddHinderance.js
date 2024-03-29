import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import "../../stylesheets/EditPopup.css";
import AddFooterButtons from './tools/AddFooterButtons';
import { Form } from 'react-bootstrap';


export default function AddHinderance(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let hinderance = {
        "name" : "",
        "severity": "minor",
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
                    <Modal.Title>Add Hinderance</Modal.Title><button onClick={handleClose} className='btn btn-outline-secondary btn-xs close-btn'>X</button>
                </Modal.Header>
                <Modal.Body>
                    <label>Name</label>
                    <input type='text' className='form-control' placeholder='Hinderance Name' onChange={(event) =>{hinderance.name = event.target.value}} />
                    <Form.Select aria-label="Default select" onChange={(event) =>{hinderance.severity = event.target.value}}>
                        <option value="minor">Minor</option>
                        <option value="major">Major</option>
                    </Form.Select>
                    <label>Effect</label>
                    <textarea rows={5} className='form-control' name="description" placeholder="Hinderance effect" onChange={(event) =>{ hinderance.description = event.target.value;}}/>
                </Modal.Body>
                <Modal.Footer>
                    <AddFooterButtons saveAndClose={saveAndClose} />
                </Modal.Footer>
            </Modal>
    </>
  )
}
