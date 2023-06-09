import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons';

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
                <Modal.Title>{capitalizeFirstLetter(props.name)}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input type="number" className='formControl' defaultValue={stat.score} onChange={(event) =>{
                    stat.score = parseInt(event.target.value);
                }} />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose}>Close</Button> <Button className='btn btn-light' onClick={saveAndClose}>Save</Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}