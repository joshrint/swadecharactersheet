import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import "../../stylesheets/EditPopup.css";


export default function AddSkill(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let skill = {
        "name" : "",
        "rank": ""
    }
    const saveAndClose = () => {
        props.handleAddSkill(skill)
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
                    <Modal.Title>Add Skill</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label>Name</label>
                    <input type="text" className='form-control' onChange={(event) =>{skill.name = event.target.value}} />
                    <label>Benefit</label>
                    <select className='form-control' name="agility" id="agility" onChange={(event) => { skill.rank = parseInt(event.target.value);}}>
                            <option value={4}>d4</option>
                            <option value={6}>d6</option>
                            <option value={8}>d8</option>
                            <option value={10}>d10</option>
                            <option value={12}>d12</option>
                        </select>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button> <Button className='btn btn-light' onClick={saveAndClose}>Save</Button>
                </Modal.Footer>
        </Modal>
        
    </>
  )
}
