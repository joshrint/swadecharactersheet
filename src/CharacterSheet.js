import React, {useEffect, useState} from 'react'
import ScoreArray from './ScoreArray'
import DerivedStats from './DerivedStats';
import Popup from './Popup';
import './stylesheets/CharacterSheet.css'
import characters from "./data/casper_teague.json";

export default function CharacterSheet() {

    const [character, setCharacter] = useState([]);
    const [popup, setPopup] = useState({
        show:false
    });
    const [abilityName, setAbilityName] = useState();
    const [abilityDesc, setAbilityDesc] = useState();

    useEffect(() => {
        setCharacter(characters)
    },[character]);


    const handleClose = ()=> {
        if (popup.show) {
            setPopup(false);
        }
        
    }
    const handlePopup = (name, description) =>{
        console.log(name, description, popup.show )
        setAbilityName(name);
        setAbilityDesc(description);
        setPopup({show:true});
    }
  return (
    <>
    {character && character.length &&(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <div className='card'>
                        <div className='card-body'>
                            <h1 className='card-title'>{character[0].name}</h1>
                            <h5 className='card-subtitle mb-2 text-body-secondary'>Alias: {character[0].alias}</h5>
                            <p className='card-text'>Rank: {character[0].rank}<br />
                            Languages: {character[0].languages}<br />
                            Faction: {character[0].faction}<br />
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
                    <div className='card-header'><h3>Attributes</h3></div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><ScoreArray diceLevel={character[0].agility} /> Agility</li>
                        <li className="list-group-item"><ScoreArray diceLevel={character[0].smarts} /> Smarts</li>
                        <li className="list-group-item"><ScoreArray diceLevel={character[0].spirit} /> Spirit</li>
                        <li className="list-group-item"><ScoreArray diceLevel={character[0].strength} /> Strength</li>
                        <li className="list-group-item"><ScoreArray diceLevel={character[0].vigor} /> Vigor</li>
                    </ul>       
                    </div>
                </div>
                <div className='col-md-4'>
                    <DerivedStats pace={character[0].pace} parry={character[0].parry} toughness={character[0].toughness} reason={character[0].reason} status={character[0].status} />
                    
                </div>
                <div className='col-md'>
                    <div className='card'>
                        <div className='card-header'><h3>Hinderances</h3></div>
                        <ul className='list-group list-group-flush'>
                            {character[0].hinderances.map((h) =>(
                                <li className='list-group-item'><div onClick={()=>handlePopup(h.name, h.description)}>{h.name}</div></li>
                            ))}
                        </ul>
                    </div>
                    
                </div>
            </div>
            <div className='row justify-content-md-center'>
                <div className='col-md'>
                    <div className='card'>
                        <div className='card-header'><h3>Skills</h3></div>
                            <ul className='list-group list-group-flush'>
                                {character[0].skills.map((s) =>(
                                    <li className='list-group-item'><ScoreArray diceLevel={s.rank} /> {s.name}</li>
                                ))}
                            </ul>
                    </div>     
                </div>
                <div className='col-md'>
                    <div className='card'>
                            <div className='card-header'><h3>Gear</h3></div>
                            <ul className='list-group list-group-flush'>
                                {character[0].gear.map((g) =>(
                                    <li className='list-group-item'>{g}</li>
                                ))}
                            </ul>
                    </div>
                </div>
                <div className='col-md'>
                    <div className='card'>
                            <div className='card-header'><h3>Edges & Advancements</h3></div>
                            <ul className='list-group list-group-flush'>
                                {character[0].edges.map((e) => (
                                    <li className='list-group-item'><div onClick={() => handlePopup(e.name, e.description)}>{e.name}</div></li>
                                ))}
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
                                {console.log(character[0])}
                                {character[0].rippertech.map((rt) =>(
                                    <tr>
                                        <td>{rt.name}</td>
                                        <td>{rt.benefit}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
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
                                    {character[0].powers.map((p) =>(
                                        <tr>
                                            <td>{p.name}</td>
                                            <td>{p.pp}</td>
                                            <td>{p.range}</td>
                                            <td>{p.dur}</td>
                                            <td>{p.effect}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
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
                                {character[0].weapons.map((w) =>(
                                    <tr>
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
