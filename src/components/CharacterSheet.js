import React, {useEffect, useState} from 'react'
import ScoreArray from './ScoreArray'
import DerivedStats from './DerivedStats';
import Popup from './Popup';
import '../stylesheets/CharacterSheet.css';
import axios from 'axios';
//import { useNavigate, useParams } from 'react-router-dom';
//Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faPlus } from '@fortawesome/free-solid-svg-icons';

export default function CharacterSheet() {

    const [character, setCharacter] = useState([]);
    const [popup, setPopup] = useState({
        show:false
    });
    const [abilityName, setAbilityName] = useState();
    const [abilityDesc, setAbilityDesc] = useState();

    const { id } = useParams();
    //const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`https://swade-api.azurewebsites.net/api/characters/${id}`)
            .then((res) =>{
                setCharacter(res.data)
            })
            .catch((err) => {
                console.log('Error from Character Sheet')
            })
    },[id]);


    const handleClose = ()=> {
        if (popup.show) {
            setPopup(false);
        }
        
    }
    const handlePopup = (name, description) =>{
        setAbilityName(name);
        setAbilityDesc(description);
        setPopup({show:true});
    }
  return (
    <>
    {character.name &&(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <div className='card'>
                        <div className='card-body'>
                            <h1 className='card-title'>{character.name}</h1>
                            <h5 className='card-subtitle mb-2 text-body-secondary'>Alias: {character.alias}</h5>
                            <p className='card-text'>Rank: {character.rank}<br />
                            Languages: {character.languages}<br />
                            Faction: {character.faction}<br />
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className='row'>
                <div className='col-md'>
                    <div className='card'>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'><form><b>Wounds:&#160;</b>
                                
                                    <label className='radio-inline'>
                                        <input type="radio" name="wound" />1 
                                    </label>
                                    <label className='radio-inline'>
                                        <input type="radio" name="wound" />2
                                    </label>
                                    <label className='radio-inline'>
                                        <input type="radio" name="wound" />3
                                    </label>
                                    <label className='radio-inline'>
                                        <input type="radio" name="wound" />Incapacitated
                                    </label>
                                </form>
                            </li>
                            <li className='list-group-item'><form><b>Fatigue:</b> 
                                <label className='radio-inline'>
                                        <input type="radio" name="fatigue" />Fatigued 
                                </label>
                                <label className='radio-inline'>
                                        <input type="radio" name="fatigue" />Exhausted 
                                </label>
                                <label className='radio-inline'>
                                        <input type="radio" name="fatigue" />Incapacitated 
                                </label>
                            </form>
                            </li>
                            <li className='list-group-item'><b>Shaken:</b> <input className="form-check-input" type="checkbox" /></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md'>
                <div className='card'>
                    <h3 className='card-header'>Attributes <FontAwesomeIcon icon={faPenToSquare} className='edit-icon' size="sm" /></h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><ScoreArray diceLevel={character.agility} /> Agility</li>
                        <li className="list-group-item"><ScoreArray diceLevel={character.smarts} /> Smarts</li>
                        <li className="list-group-item"><ScoreArray diceLevel={character.spirit} /> Spirit</li>
                        <li className="list-group-item"><ScoreArray diceLevel={character.strength} /> Strength</li>
                        <li className="list-group-item"><ScoreArray diceLevel={character.vigor} /> Vigor</li>
                    </ul>       
                    </div>
                </div>
                <div className='col-md-4'>
                    <DerivedStats pace={character.pace} parry={character.parry} toughness={character.toughness} reason={character.reason} status={character.status} />
                    
                </div>
                <div className='col-md'>
                    <div className='card'>
                        <h3 className='card-header'>Hinderances<FontAwesomeIcon icon={faPenToSquare} className='edit-icon' size="sm" /></h3>
                        <ul className='list-group list-group-flush'>
                            {character.hinderances.map((h) =>(
                                <li key={h.name} className='list-group-item'><span onClick={()=>handlePopup(h.name, h.description)}>{h.name}</span> <FontAwesomeIcon icon={faPenToSquare} className='edit-icon' /></li>
                            ))}
                            <li className='list-group-item'><FontAwesomeIcon icon={faPlus} size='2xl' className='add-icon'/></li>
                        </ul>
                    </div>
                    
                </div>
            </div>
            <div className='row justify-content-md-center'>
                <div className='col-md'>
                    <div className='card'>
                        <div className='card-header'><h3>Skills</h3></div>
                            <ul className='list-group list-group-flush'>
                                {character.skills.map((s) =>(
                                    <li key={s.name} className='list-group-item'><ScoreArray diceLevel={s.rank} /> {s.name} <FontAwesomeIcon icon={faPenToSquare} className='edit-icon' /></li>
                                ))}
                                <li className='list-group-item'><FontAwesomeIcon icon={faPlus} size='2xl' className='add-icon'/></li>
                            </ul>
                    </div>     
                </div>
                <div className='col-md'>
                    <div className='card'>
                            <div className='card-header'><h3>Gear</h3></div>
                            <ul className='list-group list-group-flush'>
                                {character.gear.map((g) =>(
                                    <li key={g} className='list-group-item'>{g} <FontAwesomeIcon className='edit-icon' icon={faPenToSquare} /></li>
                                ))}
                                <li className='list-group-item'><FontAwesomeIcon icon={faPlus} size='2xl' className='add-icon'/></li>
                            </ul>
                    </div>
                </div>
                <div className='col-md'>
                    <div className='card'>
                            <div className='card-header'><h3>Edges & Advancements</h3></div>
                            <ul className='list-group list-group-flush'>
                                {character.edges.map((e) => (
                                    <li key={e.name} className='list-group-item'><span onClick={() => handlePopup(e.name, e.description)}>{e.name}</span> <FontAwesomeIcon className='edit-icon' icon={faPenToSquare} /> </li>
                                ))}
                                <li className='list-group-item'><FontAwesomeIcon icon={faPlus} size='2xl' className='add-icon'/></li>
                            </ul>
                    </div>
                </div>
            </div>
            <div className='row justify-content-md-center'>
                <div className='col-md'>
                    <div className='card'>
                            <div className='card-header'><h3>Rippertech</h3></div>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Benefit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {character.rippertech.map((rt) =>(
                                    <tr key={rt.name}>
                                        <td>{rt.name}</td>
                                        <td>{rt.benefit}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            <p className='card-test'><FontAwesomeIcon icon={faPlus} size='2xl' className='add-icon'/></p>
                    </div>
                </div>
                <div className='col-md'>
                    <div className='card'>
                            <div className='card-header'><h3>Powers</h3></div>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>PP</th>
                                        <th>Range</th>
                                        <th>Dur</th>
                                        <th>Effect</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {character.powers.map((p) =>(
                                        <tr key={p.name}>
                                            <td>{p.name}</td>
                                            <td>{p.pp}</td>
                                            <td>{p.range}</td>
                                            <td>{p.dur}</td>
                                            <td>{p.effect}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <p className='card-test'><FontAwesomeIcon icon={faPlus} size='2xl' className='add-icon'/></p>
                    </div>
                </div>
            </div>
            <div className='row justify-content-md-center'>
                <div className='col-md'>
                    <div className='card'>
                            <div className='card-header'><h3>Weapons</h3></div>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Range</th>
                                        <th>Damage</th>
                                        <th>AP</th>
                                        <th>ROF</th>
                                        <th>WT</th>
                                        <th>Notes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {character.weapons.map((w) =>(
                                    <tr key={w.name}>
                                        <td>{w.name}</td>
                                        <td>{w.range}</td>
                                        <td>{w.damage}</td>
                                        <td>{w.ap}</td>
                                        <td>{w.rof}</td>
                                        <td>{w.wt}</td>
                                        <td>{w.notes}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            <p className='card-test'><FontAwesomeIcon icon={faPlus} size='2xl' className='add-icon'/></p>
                    </div>
                </div>
            </div>
            {popup.show && (
                <Popup
                    popup={popup}
                    name={abilityName}
                    description={abilityDesc}
                    handleClose={handleClose}
                    />
            )}
        </div>
        )}
    </>
  )
}
