import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import "../../stylesheets/EditPopup.css";


export default function AddWeapon(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let weapon = {
        "name" : "",
        "range" : "",
        "damage": "",
        "ap": "",
        "rof": "",
        "wt": "",
        "notes": ""
    }

    const saveAndClose = () => {
        props.handleAddWeapon(weapon)
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
                    <Modal.Title>Add Power</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label>Name</label>
                    <input type="text" className='form-control' onChange={(event) =>{weapon.name = event.target.value}} />
                    <label>Range</label>
                    <input type="text"  className='form-control' onChange={(event) =>{weapon.range = event.target.value}} />
                    <label>Damage</label>
                    <input type="text" className='form-control' onChange={(event) =>{weapon.damage = event.target.value}} />
                    <label>AP</label>
                    <input type="text" className='form-control' onChange={(event) =>{weapon.ap = event.target.value}} />
                    <label>Rate of Fire</label>
                    <input type="text" className='form-control' onChange={(event) =>{weapon.rof = event.target.value}} />
                    <label>Weight</label>
                    <input type="text" className='form-control' onChange={(event) =>{weapon.wt = event.target.value}} />
                    <label>Notes</label>
                    <textarea rows={4} className='form-control' name="description" onChange={(event) =>{weapon.notes = event.target.value;}}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button> <Button className='btn btn-light' onClick={saveAndClose}>Save</Button>
                </Modal.Footer>
        </Modal>
        
    </>
  )
}
