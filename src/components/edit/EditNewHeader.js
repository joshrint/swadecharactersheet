import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import "../../stylesheets/EditPopup.css";
import AddFooterButtons from '../add/tools/AddFooterButtons';

export default function EditNewHeader(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    let header = [
        {
            "name": "name",
            "value": props.name
        },
        {
            "name": "alias",
            "value": props.alias
        },
        {
            "name": "rank",
            "value" : props.rank
        },
        {
            "name":"languages",
            "value": props.languages
        },
        {
            "name":"faction",
            "value":props.faction
        }]
    const saveAndClose = () => {
        props.handleHeaderChange(header)
        setShow(false);
    }
  return (
    <>
        <FontAwesomeIcon icon={faPenToSquare} className={props.editclass} onClick={handleShow} />
        <Modal show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
            <Modal.Body>
            <button onClick={handleClose} className='btn btn-outline-secondary btn-xs close-btn'>X</button>
            
                <label>Name</label>
                <input type="text" defaultValue={header[0].value} className='form-control' onChange={(event) => header[0].value = event.target.value} />
                <label>Alias</label>
                <input type="text" defaultValue={header[1].value} className='form-control' onChange={(event) => header[1].value = event.target.value} />
                <label>Rank</label>
                <select defaultValue={header[2].value} className='form-control' onChange={(event) => header[2].value = event.target.value}>
                    <option value={"Novice"}>Novice</option>
                    <option value={"Seasoned"}>Seasoned</option>
                    <option value={"Veteran"}>Veteran</option>
                    <option value={"Heroic"}>Heroic</option>
                    <option value={"Legendary"}>Legendary</option>  
                </select> 
                <label>Languages</label>
                <input type="text" defaultValue={header[3].value} className='form-control' onChange={(event) => header[3].value = event.target.value} />
                <label>Faction</label>
                <input type="text" defaultValue={header[4].value} className='form-control' onChange={(event) => header[4].value = event.target.value} />
                
            </Modal.Body>
            <Modal.Footer>
                <AddFooterButtons saveAndClose={saveAndClose} />
            </Modal.Footer>
        </Modal>
    </>
  )
}