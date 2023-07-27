import { useState } from 'react';
import {Modal} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import AddFooterButtons from '../add/tools/AddFooterButtons';
import SelectDieType from '../tools/SelectDieType';


export default function EditAttributes(props) {
    const [attributes, setAttributes] = useState({
        "agility": props.agility,
        "smarts": props.smarts,
        "spirit": props.spirit,
        "strength": props.strength,
        "vigor": props.vigor
    })
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSelect = (diceLevel, attribute) =>{
        setAttributes((prevalue) =>{
            return {
                ...prevalue, [attribute]: diceLevel
            }
        })
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
                    <li className='list-group-item'>Agility: 
                        <SelectDieType handleSelect={handleSelect} diceLevel={attributes.agility} attribute={'agility'} /></li>
                    <li className='list-group-item'>Smarts:
                        <SelectDieType handleSelect={handleSelect} diceLevel={attributes.smarts} attribute={'smarts'} />
                        </li>
                    <li className='list-group-item'>Spirit:
                        <SelectDieType handleSelect={handleSelect} diceLevel={attributes.spirit} attribute={'spirit'} />
                        </li>
                    <li className='list-group-item'>Strength:
                        <SelectDieType handleSelect={handleSelect} diceLevel={attributes.strength} attribute={'strength'} />
                        </li>
                    <li className='list-group-item'>Vigor:
                    <SelectDieType handleSelect={handleSelect} diceLevel={attributes.vigor} attribute={'vigor'} />
                     </li>
                </ul>
            </Modal.Body>
            <Modal.Footer>
                <AddFooterButtons saveAndClose={saveAndClose}/>
            </Modal.Footer>
        </Modal>
    </>
  )
}
