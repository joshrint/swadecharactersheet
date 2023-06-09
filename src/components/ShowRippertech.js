import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ShowRippertech(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function truncate(str, maxlength){
        return (str.length > maxlength) ?
            str.slice(0,maxlength -1) + "..." : str;
    }
    
  return (
    <>
        <span onClick={handleShow}>{truncate(props.benefit, 40)}</span>  
        <Modal show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
            <Modal.Header>
                <Modal.Title>{props.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.benefit}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose}>Close</Button> 
            </Modal.Footer>
        </Modal>
    </>
  )
}
