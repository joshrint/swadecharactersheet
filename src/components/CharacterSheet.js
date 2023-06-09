import React, {useEffect, useState} from 'react'
import ScoreArray from './ScoreArray'
import DerivedStats from './DerivedStats';
import Popup from './Popup';
import '../stylesheets/CharacterSheet.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import EditAttributes from './edit/EditAttributes';
import EditHinderance from './edit/EditHinderance';
import EditEdge from './edit/EditEdge';
import EditSkills from './edit/EditSkills';
import EditGear from './edit/EditGear';
import ShowRippertech from './ShowRippertech';
import ShowPowers from './ShowPowers';
import EditRippertech from './edit/EditRippertech';
import EditPower from './edit/EditPower';
import EditWeapon from './edit/EditWeapon';
import AddHinderance from './add/AddHinderance';
import AddEdge from './add/AddEdge';
import AddGear from './add/AddGear';
import AddPower from './add/AddPower';
import AddRippertech from './add/AddRippertech';
import AddSkill from './add/AddSkill';
import AddWeapon from './add/AddWeapon';

export default function CharacterSheet() {

    const [character, setCharacter] = useState([]);
    const [popup, setPopup] = useState({
        show:false
    });
    const [abilityName, setAbilityName] = useState();
    const [abilityDesc, setAbilityDesc] = useState();

    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`https://swade-api.azurewebsites.net/api/characters/${id}`)
            .then((res) =>{
                setCharacter(res.data)
            })
            .catch((err) => {
                console.log('Error from Character Sheet ', err)
            })
    },[id]);

    const updateHandler = () =>{
        axios.put(`https://swade-api.azurewebsites.net/api/character/update/`+character.name, character)
        .then((res)=>{
            console.log(res.data)
        })
        .catch((err)=>{
            console.log('Error updating data ', err)
        });

    }

    


    const handleClose = ()=> {
        if (popup.show) {
            setPopup(false);
        }
        
    }
    //Handle Adding Items
    const handleAddHinderance = (e) => {
        let tempHinderances = character.hinderances;
        tempHinderances.push(e);
        const updatedCharacter = () => {
            return {...character, hinderances:tempHinderances}
        }
        setCharacter(updatedCharacter);
        updateHandler();
    }
    const handleAddEdge = (e) => {
        if(e.name.length > 0){
            let tempEdges = character.edges;
            tempEdges.push(e);
            const updatedCharacter = () => {
                return {...character, edges:tempEdges}
            }
            setCharacter(updatedCharacter);
            updateHandler();
        }
    }
    const handleAddGear = (e) => {
        if(e.length > 0){
            let tempGear = character.gear;
            tempGear.push(e);
            const updatedCharacter = () =>{
                return{...character, gear:tempGear}
            }
            setCharacter(updatedCharacter);
            updateHandler();
        }
    }
    const handleAddPower = (e) => {
        if(e.name.length > 0){
            let tempPowers = character.powers;
            tempPowers.push(e);
            const updatedCharacter = () => {
                return {...character, powers:tempPowers}
            }
            setCharacter(updatedCharacter);
            updateHandler();
        }
    }
    const handleAddRippertech = (e) => {
        if(e.name.length > 0){
            let tempRT = character.rippertech;
            tempRT.push(e);
            const updatedCharacter = () => {
                return {...character, rippertech:tempRT}
            }
            setCharacter(updatedCharacter);
            updateHandler();
        }
    }
    const handleAddSkill = (e) => {
        if(e.name.length > 0){
            let tempSkills = character.skills;
            tempSkills.push(e)
            const updatedCharacter = () =>{
                return {...character, skills:tempSkills}
            }
            setCharacter(updatedCharacter);
            updateHandler();
        }
    }
    const handleAddWeapon = (e) =>{
        if(e.name.length > 0){
            let tempWeapon = character.weapons;
            tempWeapon.push(e);
            const updatedCharacter = () =>{
                return{...character, weapons:tempWeapon}
            }
            setCharacter(updatedCharacter);
            updateHandler();
        }
    }


    const handlePopup = (name, description) =>{
        setAbilityName(name);
        setAbilityDesc(description);
        setPopup({show:true});
    }
    // Handle character changes
    const handleAbilityChange = (e) => {
        const updatedCharacter = () => {
           return { ...character, agility: e.agility, smarts: e.smarts, spirit: e.spirit, strength: e.strength, vigor: e.vigor }
        }
        setCharacter(updatedCharacter);
        updateHandler();
    }
    const handleStatChange = (e) =>{
        const updatedCharacter = () => {
            if (e.skill === 'pace'){
                return { ...character, pace: e.score }
            } else if (e.skill === "parry"){
                return { ...character, parry: e.score }
            } else if (e.skill === "toughness"){
                return { ...character, toughness: e.score }
            } else if (e.skill === "reason"){
                return { ...character, reason: e.score }
            } else if (e.skill === "status"){
                return { ...character, status: e.score }
            } 
        }
        setCharacter(updatedCharacter);
        updateHandler();
    }
    const handleHinderanceChange = (e) =>{
        let tempHinderances = character.hinderances;
        tempHinderances.forEach(hind => {
            if (hind.name === e.name){
                hind.description = e.description
            }
        });
        const updatedCharacter = () =>{
            return {...character, hinderances:tempHinderances}
        }
        setCharacter(updatedCharacter);
        updateHandler();
    }
    const handleEdgeChange = (e) =>{
        let tempEdges = character.edges;
        tempEdges.forEach(edge => {
            if (edge.name === e.name){
                edge.description = e.description
            }
        });
        const updatedCharacter = () =>{
            return {...character, edge:tempEdges}
        }
        setCharacter(updatedCharacter);
        updateHandler();
    }
    const handleSkillChange = (e) =>{
        let tempSkills = character.skills;
        tempSkills.forEach(skill =>{
            if(skill.name === e.name){
                skill.rank = e.rank
            }
        });
        const updatedCharacter = () =>{
            return {...character, skills:tempSkills}
        }
        setCharacter(updatedCharacter);
        updateHandler();
    }
    const handleGearChange = (e) =>{
        let tempGear = character.gear;
        for (let i = 0; i < tempGear.length; i++) {
            if(e.oldName === tempGear[i]){
                tempGear[i]=e.name;
            }
        }
        const updatedCharacter = (e) =>{
            return {...character, gear:tempGear}
        }
        setCharacter(updatedCharacter);
        updateHandler();
    }
    const handleRipperTechChange = (e) => {
        let tempTech = character.rippertech;
        tempTech.forEach(tech =>{
            if(tech.name === e.name){
                tech.benefit = e.benefit
            }
        });
        const updatedCharacter = () =>{
            return {...character, rippertech:tempTech}
        }
        setCharacter(updatedCharacter);
        updateHandler();
    }
    const handlePowersChange = (e) =>{
        let tempPowers = character.powers;
        tempPowers.forEach(p =>{
            if(p.name === e.name){
                p.pp = e.pp;
                p.range = e.range;
                p.dur = e.dur;
                p.effect = e.effect;
            }
        });
        const updatedCharacter = () =>{
            return {...character, powers:tempPowers}
        }
        setCharacter(updatedCharacter);
        updateHandler();
    }
    const handleWeaponsChange = (e) =>{
        let tempWeapons = character.weapons;
        tempWeapons.forEach(w =>{
            if(w.name === e.name){
                w.range = e.range;
                w.damage = e.damage;
                w.ap = e.ap;
                w.rof = e.rof;
                w.wt = e.wt;
                w.notes = e.notes;
            }
        });
        const updatedCharacter = () =>{
            return {...character, weapons:tempWeapons}
        }
        setCharacter(updatedCharacter);
        updateHandler();
    }

    //Handle removing item
    const handleRemoveHinderance = (e) => {
        let tempHinderances = character.hinderances;
        for(let i = 0; i < tempHinderances.length; i++){
            if(tempHinderances[i].name === e){
                tempHinderances.splice(i, 1);
            }
        }
        const updatedCharacter = () =>{
            return {...character, hinderances:tempHinderances}
        }
        setCharacter(updatedCharacter)
        updateHandler();
    }
    const handleRemoveSkill = (e) =>{
        let tempSkills = character.skills;
        for(let i = 0; i < tempSkills.length; i++){
            if(tempSkills[i].name === e){
                tempSkills.splice(i, 1);
            }
        }
        const updatedCharacter = () =>{
            return{...character, skills:tempSkills}
        }
        setCharacter(updatedCharacter);
        updateHandler();
    }
    const handleRemoveGear = (e) =>{
        let tempGear = character.gear;
        for(let i = 0; i < tempGear.length; i++){
            if(tempGear[i] === e){
                tempGear.splice(i, 1);
            }
        }
        const updatedCharacter = () =>{
            return{...character, gear:tempGear}
        }
        setCharacter(updatedCharacter)
        updateHandler();
    }
    const handleRemoveEdge = (e) =>{
        let tempEdges = character.edges;
        for(let i = 0; i < tempEdges.length; i++){
            if(tempEdges[i].name === e){
                tempEdges.splice(i, 1);
            }
        }
        const updatedCharacter = () =>{
            return{...character, edges:tempEdges}
        }
        setCharacter(updatedCharacter)
        updateHandler();
    }
    const handleRemoveRippertech = (e) =>{
        let tempRT = character.rippertech;
        for(let i = 0; i < tempRT.length; i++){
            if(tempRT[i].name === e){
                tempRT.splice(i, 1);
            }
        }
        const updatedCharacter = () =>{
            return{...character, rippertech:tempRT}
        }
        setCharacter(updatedCharacter)
        updateHandler();
    }
    const handleRemovePower = (e) =>{
        let tempPowers = character.powers;
        for(let i = 0; i < tempPowers.length; i++){
            if(tempPowers[i].name === e){
                tempPowers.splice(i, 1);
            }
        }
        const updatedCharacter = () =>{
            return{...character, powers:tempPowers}
        }
        setCharacter(updatedCharacter)
        updateHandler();
    }
    const handleRemoveWeapon = (e) =>{
        let tempWeapons = character.weapons;
        for(let i = 0; i < tempWeapons.length; i++){
            if(tempWeapons[i].name === e){
                tempWeapons.splice(i, 1);
            }
        }
        const updatedCharacter = () =>{
            return{...character, weapons:tempWeapons}
        }
        setCharacter(updatedCharacter)
        updateHandler();
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
                    <h3 className='card-header'>Attributes <EditAttributes agility={character.agility}
                                                                             smarts={character.smarts}
                                                                             spirit={character.spirit}
                                                                             strength={character.strength}
                                                                             vigor={character.vigor}
                                                                             handleAbilityChange={handleAbilityChange}  /></h3>
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
                    <DerivedStats pace={character.pace} parry={character.parry} toughness={character.toughness} reason={character.reason} status={character.status} handleStatChange={handleStatChange} />
                    
                </div>
                <div className='col-md'>
                    <div className='card'>
                        <h3 className='card-header'>Hinderances<AddHinderance handleAddHinderance={handleAddHinderance} /></h3>
                        <ul className='list-group list-group-flush'>
                            {character.hinderances.map((h) =>(
                                <li key={h.name} className='list-group-item'><span onClick={()=>handlePopup(h.name, h.description)}>{h.name}</span> <EditHinderance name={h.name} description={h.description} handleHinderanceChange={handleHinderanceChange} handleRemoveHinderance={handleRemoveHinderance} /></li>
                            ))}
                            
                        </ul>
                        
                    </div>
                    
                </div>
            </div>
            <div className='row justify-content-md-center'>
                <div className='col-md'>
                    <div className='card'>
                        <h3 className='card-header'>Skills <AddSkill handleAddSkill={handleAddSkill} /></h3>
                            <ul className='list-group list-group-flush'>
                                {character.skills.map((s) =>(
                                    <li key={s.name} className='list-group-item'><ScoreArray diceLevel={s.rank} /> {s.name} <EditSkills name={s.name} rank={s.rank} handleSkillChange={handleSkillChange} handleRemoveSkill={handleRemoveSkill} /></li>
                                ))}
                                
                            </ul>
                            
                    </div>     
                </div>
                <div className='col-md'>
                    <div className='card'>
                            <h3 className='card-header'>Gear<AddGear handleAddGear={handleAddGear} /></h3>
                            <ul className='list-group list-group-flush'>
                                {character.gear.map((g) =>(
                                    <li key={g} className='list-group-item'>{g} <EditGear name={g} handleGearChange={handleGearChange} handleRemoveGear={handleRemoveGear} /></li>
                                ))}
                                
                            </ul>
                            <div className='position-absolute bottom-0 end-0'></div>
                    </div>
                </div>
                <div className='col-md'>
                    <div className='card'>
                            <h3 className='card-header'>Edges<AddEdge handleAddEdge={handleAddEdge} /></h3>
                            <ul className='list-group list-group-flush'>
                                {character.edges.map((e) => (
                                    <li key={e.name} className='list-group-item'><span onClick={() => handlePopup(e.name, e.description)}>{e.name}</span> <EditEdge name={e.name} description={e.description} handleEdgeChange={handleEdgeChange} handleRemoveEdge={handleRemoveEdge} /> </li>
                                ))}
                            </ul>
                    </div>
                </div>
            </div>
            <div className='row justify-content-md-center'>
                <div className='col-md'>
                    <div className='card'>
                            <h3 className='card-header'>Rippertech<AddRippertech handleAddRippertech={handleAddRippertech} /></h3>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Benefit</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                {character.rippertech.map((rt) =>(
                                    <tr key={rt.name}>
                                        <td>{rt.name}</td>
                                        <td><ShowRippertech name={rt.name} benefit={rt.benefit} /></td>
                                        <td><EditRippertech name={rt.name} benefit={rt.benefit} handleRipperTechChange={handleRipperTechChange} handleRemoveRippertech={handleRemoveRippertech} /></td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                    </div>
                </div>
                <div className='col-md'>
                    <div className='card'>
                            <h3 className='card-header'>Powers<AddPower handleAddPower={handleAddPower} /></h3>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>PP</th>
                                        <th>Range</th>
                                        <th>Dur</th>
                                        <th>Effect</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {character.powers.map((p) =>(
                                        <tr key={p.name}>
                                            <td>{p.name}</td>
                                            <td>{p.pp}</td>
                                            <td>{p.range}</td>
                                            <td>{p.dur}</td>
                                            <td><ShowPowers name={p.name} pp={p.pp} range={p.range} dur={p.dur} effect={p.effect} /></td>
                                            <td><EditPower name={p.name} pp={p.pp} range={p.range} dur={p.dur} effect={p.effect} handlePowersChange={handlePowersChange} handleRemovePower={handleRemovePower} /></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className='position-absolute bottom-0 end-0'></div>
                    </div>
                </div>
            </div>
            <div className='row justify-content-md-center'>
                <div className='col-md'>
                    <div className='card'>
                            <h3 className='card-header'>Weapons<AddWeapon handleAddWeapon={handleAddWeapon} /></h3>
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
                                        <th></th>
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
                                        <td><EditWeapon name={w.name} range={w.range} damage={w.damage} ap={w.ap} rof={w.rof} wt={w.wt} notes={w.notes} handleWeaponsChange={handleWeaponsChange} handleRemoveWeapon={handleRemoveWeapon} /></td>
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
