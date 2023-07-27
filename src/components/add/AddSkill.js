import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import "../../stylesheets/EditPopup.css";
import AddFooterButtons from './tools/AddFooterButtons';
import SelectDieType from '../tools/SelectDieType';


export default function AddSkill(props) {
    const [show, setShow] = useState(false);
    const [skill, setSkill] = useState({
        "name" : "",
        "gov" : "Ag",
        "rank": 1
    })
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSelect = (value, name) =>{
        setSkill((prevalue) =>{
            return{
                ...prevalue, [name]:value
            }
        })
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
                    <Modal.Title>Add Skill</Modal.Title><button onClick={handleClose} className='btn btn-outline-secondary btn-xs close-btn'>X</button>
                </Modal.Header>
                <Modal.Body>
                    <label>Name</label>
                    <input type="text" className='form-control' onChange={(event) =>{handleSelect(event.target.value, 'name')}} />
                    <label>Governing Attribute</label>
                    <select className='form-control' name="agility" id="agility" onChange={(event) => { handleSelect(parseInt(event.target.value), 'gov')}}>
                            <option value={"Ag"}>Agility</option>
                            <option value={"Sm"}>Smarts</option>
                            <option value={"Sp"}>Spirit</option>
                            <option value={"St"}>Strength</option>
                            <option value={"Vi"}>Vigor</option>
                        </select>
                    <label>Rank</label>
                        <SelectDieType handleSelect={handleSelect} diceLevel={skill.rank} attribute={'rank'} />
                </Modal.Body>
                <Modal.Footer>                   
                    <AddFooterButtons saveAndClose={saveAndClose} />
                </Modal.Footer>
        </Modal>
    </>
  )
}
