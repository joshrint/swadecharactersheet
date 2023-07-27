import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import EditFooterButtons from './tools/EditFooterButtons';

export default function EditPower(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDelete = () => {props.handleRemovePower(power.name); setShow(false)}

    let power = {
        "name" : props.name,
        "pp" : props.pp,
        "range": props.range,
        "dur": props.dur,
        "effect": props.effect
    }
    const saveAndClose = () => {
        props.handlePowersChange(power)
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
                    <label>Power Points</label>
                    <input type='number' defaultValue={power.pp} className='form-control' onChange={(event) =>{power.pp = event.target.value}}/>
                    <label>Range</label>
                    <input type="text" defaultValue={power.range} className='form-control' onChange={(event) =>{power.range = event.target.value}} />
                    <label>Duration</label>
                    <input type="text" defaultValue={power.dur} className='form-control' onChange={(event) =>{power.dur = event.target.value}} />
                    <label>Effect</label>
                    <textarea rows={5} className='form-control' name="description" defaultValue={power.effect} onChange={(event) =>{power.effect = event.target.value;}}/>
                </Modal.Body>
                <Modal.Footer>
                <EditFooterButtons handleDelete={handleDelete} saveAndClose={saveAndClose} />
                </Modal.Footer>
            </Modal>
        </>
  )
}
