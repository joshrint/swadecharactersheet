import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import "../../stylesheets/EditPopup.css";
import AddFooterButtons from './tools/AddFooterButtons';


export default function AddPower(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let power = {
        "name" : "",
        "pp" : "",
        "range": "",
        "dur": "",
        "effect": ""
    }
    const saveAndClose = () => {
        props.handleAddPower(power)
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
                    <Modal.Title>Add Power</Modal.Title><button onClick={handleClose} className='btn btn-outline-secondary btn-xs close-btn'>X</button>
                </Modal.Header>
                <Modal.Body>
                    <label>Name</label>
                    <input type="text" className='form-control' onChange={(event) =>{power.name = event.target.value}} />
                    <label>Power Points</label>
                    <input type='number' className='form-control' onChange={(event) =>{power.pp = event.target.value}}/>
                    <label>Range</label>
                    <input type="text" className='form-control' onChange={(event) =>{power.range = event.target.value}} />
                    <label>Duration</label>
                    <input type="text" className='form-control' onChange={(event) =>{power.dur = event.target.value}} />
                    <label>Effect</label>
                    <textarea rows={5} className='form-control' name="description" defaultValue={power.effect} onChange={(event) =>{power.effect = event.target.value;}}/>
                </Modal.Body>
                <Modal.Footer>
                    <AddFooterButtons saveAndClose={saveAndClose} />
                </Modal.Footer>
        </Modal>
        
    </>
  )
}
