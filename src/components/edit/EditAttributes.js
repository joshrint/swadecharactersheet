import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import AddFooterButtons from '../add/tools/AddFooterButtons';


export default function EditAttributes(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let attributes={
        "agility": props.agility,
        "smarts": props.smarts,
        "spirit": props.spirit,
        "strength": props.strength,
        "vigor": props.vigor
    }

    const saveAndClose = () => {
        props.handleAbilityChange(attributes);
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
                <Modal.Title>Attributes</Modal.Title><button onClick={handleClose} className='btn btn-outline-secondary btn-xs close-btn'>X</button>
            </Modal.Header>
            <Modal.Body>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>Agility: <select className='form-control' name="agility" id="agility" defaultValue={props.agility} 
                    onChange={(event) => {
                        attributes.agility = parseInt(event.target.value);                        
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
                            attributes.smarts = parseInt(event.target.value);                        
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
                            attributes.spirit = parseInt(event.target.value);                        
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
                            attributes.strength = parseInt(event.target.value);                        
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
                            attributes.vigor = parseInt(event.target.value);                        
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
                <AddFooterButtons saveAndClose={saveAndClose}/>
            </Modal.Footer>
        </Modal>
    </>
  )
}
