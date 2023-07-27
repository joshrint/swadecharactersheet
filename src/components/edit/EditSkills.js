import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import "../../stylesheets/EditPopup.css";
import EditFooterButtons from './tools/EditFooterButtons';
import SelectDieType from '../tools/SelectDieType';

export default function EditSkills(props) {
    const [show, setShow] = useState(false);
    const [skill, setSkill] = useState({"name": props.name, "rank": props.rank})
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDelete = () => {props.handleRemoveSkill(skill.name); setShow(false)}

    const handleSelect = (rank, attribute) =>{
        setSkill({'name':attribute, "rank": rank} )
    }

    /*let skill = {
        "name" : props.name,
        "rank": props.rank
    }*/
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
                <SelectDieType handleSelect={handleSelect} diceLevel={skill.rank} attribute={skill.name} />
            </Modal.Body>
            <Modal.Footer>
                <EditFooterButtons handleDelete={handleDelete} saveAndClose={saveAndClose} />    
            </Modal.Footer>
        </Modal>
    </>
  )
}
