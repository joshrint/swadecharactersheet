import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons';

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
            <FontAwesomeIcon icon={faPenToSquare} className='edit-icon' onClick={handleShow} />
            <Modal show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}>
                <Modal.Header>
                    <Modal.Title>{props.name}</Modal.Title>
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
                    <Button onClick={handleClose}>Close</Button> <Button className='btn btn-light' onClick={saveAndClose}>Save</Button><Button className='btn btn-danger' onClick={handleDelete}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </>
  )
}
