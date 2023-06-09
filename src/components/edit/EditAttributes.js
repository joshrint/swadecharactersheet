import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons';


export default function EditAttributes(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let abilities={
        "agility": props.agility,
        "smarts": props.smarts,
        "spirit": props.spirit,
        "strength": props.strength,
        "vigor": props.vigor
    }

    const saveAndClose = () => {
        props.handleAbilityChange(abilities);
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
                <Modal.Title>Attributes</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>Agility: <select className='form-control' name="agility" id="agility" defaultValue={props.agility} 
                    onChange={(event) => {
                        abilities.agility = parseInt(event.target.value);                        
                    }} 
                    >
                            <option value={4}>d4</option>
                            <option value={6}>d6</option>
                            <option value={8}>d8</option>
                            <option value={10}>d10</option>
                            <option value={12}>d12</option>
                        </select></li>
                    <li className='list-group-item'>Smarts:<select className='form-control' name="smarts" id="smarts" defaultValue={props.smarts} 
                        onChange={(event) => {
                            abilities.smarts = parseInt(event.target.value);                        
                        }}
                    >
                            <option value={4}>d4</option>
                            <option value={6}>d6</option>
                            <option value={8}>d8</option>
                            <option value={10}>d10</option>
                            <option value={12}>d12</option>
                        </select></li>
                    <li className='list-group-item'>Spirit:<select className='form-control' name="spirit" id="spirit" defaultValue={props.spirit}
                        onChange={(event) => {
                            abilities.spirit = parseInt(event.target.value);                        
                        }}
                    >
                            <option value={4}>d4</option>
                            <option value={6}>d6</option>
                            <option value={8}>d8</option>
                            <option value={10}>d10</option>
                            <option value={12}>d12</option>
                        </select></li>
                    <li className='list-group-item'>Strength:<select className='form-control' name="strength" id="strength" defaultValue={props.strength}
                        onChange={(event) => {
                            abilities.strength = parseInt(event.target.value);                        
                        }}
                    >
                            <option value={4}>d4</option>
                            <option value={6}>d6</option>
                            <option value={8}>d8</option>
                            <option value={10}>d10</option>
                            <option value={12}>d12</option>
                        </select> </li>
                    <li className='list-group-item'>Vigor:<select className='form-control' name="vigor" id="vigor" defaultValue={props.vigor}
                        onChange={(event) => {
                            abilities.vigor = parseInt(event.target.value);                        
                        }}
                    >
                            <option value={4}>d4</option>
                            <option value={6}>d6</option>
                            <option value={8}>d8</option>
                            <option value={10}>d10</option>
                            <option value={12}>d12</option>
                        </select> </li>
                </ul>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose}>Close</Button> <Button className='btn btn-light' onClick={saveAndClose}>Save</Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}
