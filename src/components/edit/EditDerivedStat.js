import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import AddFooterButtons from '../add/tools/AddFooterButtons';

export default function EditDerivedStat(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    let stat = {
        "skill" : props.name,
        "score" : props.stat
    };
    
    const saveAndClose = () => {
        props.handleStatChange(stat)
        setShow(false);
    }
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

  return (
    <>
        <FontAwesomeIcon icon={faPenToSquare} className='edit-icon' onClick={handleShow} />
        <Modal show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
            <Modal.Header>
                <Modal.Title>{capitalizeFirstLetter(props.name)}</Modal.Title><button onClick={handleClose} className='btn btn-outline-secondary btn-xs close-btn'>X</button>
            </Modal.Header>
            <Modal.Body>
                {stat.skill === "wealth" ? <input type="number" step="0.01" min="0" max="10" className='formControl' defaultValue={stat.score} onChange={(event) =>{
                    stat.score = event.target.value;
                }} /> 
                : <input type="number" className='formControl' defaultValue={stat.score} onChange={(event) =>{
                    stat.score = parseInt(event.target.value);
                }} />
                }
                
            </Modal.Body>
            <Modal.Footer>
                <AddFooterButtons saveAndClose={saveAndClose} />
            </Modal.Footer>
        </Modal>
    </>
  )
}
