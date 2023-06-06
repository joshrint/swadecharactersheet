import React from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter, ModalTitle } from 'react-bootstrap';

export default function Popup({popup, name, description, handleClose}) {
  return (
    <div>
        <Modal show={popup.show}>
            <ModalHeader>
                <ModalTitle>{name}</ModalTitle>
            </ModalHeader>
            <ModalBody>
                {description}
                
            </ModalBody>
            <ModalFooter>
              <button id="close" onClick={handleClose} className='btn btn-outline-dange'>Close</button>
            </ModalFooter>
        </Modal>
    </div>
  )
}
