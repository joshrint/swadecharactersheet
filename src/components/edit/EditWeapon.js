import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons';

export default function EditWeapon(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDelete = () => {props.handleRemoveWeapon(weapon.name); setShow(false)}

    let weapon = {
        "name" : props.name,
        "range" : props.range,
        "damage": props.damage,
        "ap": props.ap,
        "rof": props.rof,
        "wt": props.wt,
        "notes": props.notes
    }
    const saveAndClose = () => {
        props.handleWeaponsChange(weapon)
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
                    <label>Range</label>
                    <input type="text" defaultValue={weapon.range} className='form-control' onChange={(event) =>{weapon.range = event.target.value}} />
                    <label>Damage</label>
                    <input type="text" defaultValue={weapon.damage} className='form-control' onChange={(event) =>{weapon.damage = event.target.value}} />
                    <label>AP</label>
                    <input type="text" defaultValue={weapon.ap} className='form-control' onChange={(event) =>{weapon.ap = event.target.value}} />
                    <label>Rate of Fire</label>
                    <input type="text" defaultValue={weapon.rof} className='form-control' onChange={(event) =>{weapon.rof = event.target.value}} />
                    <label>Weight</label>
                    <input type="text" defaultValue={weapon.wt} className='form-control' onChange={(event) =>{weapon.wt = event.target.value}} />
                    <label>Notes</label>
                    <textarea rows={4} className='form-control' name="description" defaultValue={weapon.notes} onChange={(event) =>{weapon.notes = event.target.value;}}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button> <Button className='btn btn-light' onClick={saveAndClose}>Save</Button><Button className='btn btn-danger' onClick={handleDelete}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </>
  )
}
