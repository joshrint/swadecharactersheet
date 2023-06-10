import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import "../../stylesheets/EditPopup.css";
import EditFooterButtons from './tools/EditFooterButtons';

export default function EditSkills(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDelete = () => {props.handleRemoveSkill(skill.name); setShow(false)}

    let skill = {
        "name" : props.name,
        "rank": props.rank
    }
    const saveAndClose = () => {
        props.handleSkillChange(skill)
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
                <Modal.Title>{props.name}</Modal.Title><button onClick={handleClose} className='btn btn-outline-secondary btn-xs close-btn'>X</button>
            </Modal.Header>
            <Modal.Body>
                <label>Rank</label>
                <select className='form-control' name="agility" id="agility" defaultValue={skill.rank} 
                    onChange={(event) => {
                        skill.rank = parseInt(event.target.value);                        
                    }} 
                    >
                            <option value={4}>d4</option>
                            <option value={6}>d6</option>
                            <option value={8}>d8</option>
                            <option value={10}>d10</option>
                            <option value={12}>d12</option>
                        </select>
            </Modal.Body>
            <Modal.Footer>
                <EditFooterButtons handleDelete={handleDelete} saveAndClose={saveAndClose} />    
            </Modal.Footer>
        </Modal>
    </>
  )
}
