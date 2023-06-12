import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ShowPowers(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function truncate(str, maxlength){
        return (str.length > maxlength) ?
            str.slice(0,maxlength -1) + "..." : str;
    }
    
  return (
    <>
        <span onClick={handleShow}>{truncate(props.effect, 25)}</span>  
        <Modal show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
            <Modal.Header>
                <Modal.Title>{props.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <b>Power Points:</b> {props.pp} <br />
                <b>Range :</b> {props.range} <br />
                <b>Durration:</b> {props.dur} <br />
                {props.effect}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose}>Close</Button> 
            </Modal.Footer>
        </Modal>
    </>
  )
}
