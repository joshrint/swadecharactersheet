import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import AddFooterButtons from '../add/tools/AddFooterButtons';

export default function EditDerivedStat(props) {
    const [show, setShow] = useState(false);
    const [wealthCost, setWealthCost] = useState(0);
    const [stat, setStat] = useState({
        "skill" : props.name,
        "score" : props.stat
    }
         
    )
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    
    const saveAndClose = () => {
        props.handleStatChange(stat)
        setShow(false);
    }
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

  return (
    <>
        <FontAwesomeIcon icon={faPenToSquare} className={props.editclass} onClick={handleShow} />
        <Modal show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
            <Modal.Header>
                <Modal.Title>{capitalizeFirstLetter(props.name)}</Modal.Title><button onClick={handleClose} className='btn btn-outline-secondary btn-xs close-btn'>X</button>
            </Modal.Header>
            <Modal.Body>
                {stat.skill === "wealth" ? <>
                    <div>£{stat.score}</div>
                    <div>
                    <input type="number" step="0.01" min="0" className='formControl' defaultValue={wealthCost} onChange={(e) =>{
                        setWealthCost(e.target.value)
                    }} />
                    </div>
                    <button onClick={()=>setStat({...stat, score:(parseFloat(stat.score)+parseFloat(wealthCost)).toFixed(2)})}><FontAwesomeIcon icon={faPlus} />
                    </button><button onClick={()=>setStat({...stat, score:(parseFloat(stat.score)-parseFloat(wealthCost)).toFixed(2)})}><FontAwesomeIcon icon={faMinus} /></button>
                    </> 
                : <input type="number" className='formControl' defaultValue={stat.score} onChange={(event) =>{
                    setStat({...stat, score: parseInt(event.target.value)});
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
