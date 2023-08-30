import React from 'react';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

export default function DeleteCharacter(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = () =>{
        props.handleDelete(props.id)
        handleClose()
    }


    return (
        <>
            <FontAwesomeIcon icon={faTrashCan} onClick={handleShow} />
            <Modal show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                <Modal.Header>
                    <Modal.Title>Are You Sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <div>
                            Are you sure you wish to delete {props.characterName}?
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className='btn btn-outline-primary' onClick={() => handleDelete()}>Delete</button><button className='btn btn-outline-danger' onClick={handleClose}>Cancel</button>
                    </Modal.Footer>
            </Modal>
        </>
    )
}
