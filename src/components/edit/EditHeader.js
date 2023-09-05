import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import "../../stylesheets/EditPopup.css";
import AddFooterButtons from '../add/tools/AddFooterButtons';
import ranks from '../characterSheet/tools/Ranks';
import AddRippertech from '../add/AddRippertech';
import AddPower from '../add/AddPower';

export default function EditHeader(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    let header = [
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

    const checkRipperTechandPowers = () =>{
        if (props.rippertech === 0) {
            return false
        } else if (props.powers === 0){
            return false
        } else {
            return true
        }
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
                <input type="text" defaultValue={header[0].value} className='form-control' onChange={(event) => header[0].value = event.target.value} />
                <label>Rank</label>
                <select defaultValue={header[1].value} className='form-control' onChange={(event) => header[1].value = event.target.value}>
                    {ranks.map((rank) =>(
                        <option key={rank.value} value={rank.value}>{rank.name}</option>
                    ))} 
                </select> 
                <label>Languages</label>
                <input type="text" defaultValue={header[2].value} className='form-control' onChange={(event) => header[2].value = event.target.value} />
                <label>Faction</label>
                <input type="text" defaultValue={header[3].value} className='form-control' onChange={(event) => header[3].value = event.target.value} />

                
                
            </Modal.Body>
            { checkRipperTechandPowers() ? <></> :
                <>
                <Modal.Header>
                <Modal.Title>Add Rippertech or Powers</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {props.rippertech > 0 ? <></> 
                    :
                    <div>Add Rippertech <AddRippertech handleAddRippertech={props.handleAddRippertech} /></div>}
                {props.powers > 0 ? <></>
                    :
                    <div>Add Powers <AddPower handleAddPower={props.handleAddPower} /></div>}
                </Modal.Body>
                </>
            }
            
            <Modal.Footer>
                <AddFooterButtons saveAndClose={saveAndClose} />
            </Modal.Footer>
        </Modal>
    </>
  )
}