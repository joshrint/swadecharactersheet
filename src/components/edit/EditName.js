import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import "../../stylesheets/EditPopup.css";
import AddFooterButtons from '../add/tools/AddFooterButtons';

export default function EditName(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    let topBar = {
        "name" : props.name,
        "alias" : props.alias,
        "rank" : props.rank,
        "languages" : props.languages,
        "faction": props.faction
    }
    const saveAndClose = () => {
        props.handleTopBarChange(topBar)
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
                <label>Alias</label>
                <input type="text" defaultValue={topBar.alias} className='form-control' onChange={(event) => topBar.alias = event.target.value} />
                <label>Rank</label>
                <select defaultValue={topBar.rank} className='form-control' onChange={(event) => topBar.rank = event.target.value}>
                    <option value={"Novice"}>Novice</option>
                    <option value={"Seasoned"}>Seasoned</option>
                    <option value={"Veteran"}>Veteran</option>
                    <option value={"Heroic"}>Heroic</option>
                    <option value={"Legendary"}>Legendary</option>  
                </select> 
                <label>Languages</label>
                <input type="text" defaultValue={topBar.languages} className='form-control' onChange={(event) => topBar.languages = event.target.value} />
                <label>Faction</label>
                <input type="text" defaultValue={topBar.faction} className='form-control' onChange={(event) => topBar.faction = event.target.value} />
                
            </Modal.Body>
            <Modal.Footer>
                <AddFooterButtons saveAndClose={saveAndClose} />
            </Modal.Footer>
        </Modal>
    </>
  )
}