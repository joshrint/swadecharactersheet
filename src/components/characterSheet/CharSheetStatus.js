import React from 'react'

export default function CharSheetStatus({wounds, fatigue, shaken, handleChange, updateHandler}) {
    let isShaken = Boolean(shaken);
    const checkShaken = () =>{
        if (isShaken){
            isShaken = false;
        } else{
            isShaken=true
        }
        statusUpdate({"name":"shaken","value":isShaken});
    }
    const statusUpdate =(e) =>{
        handleChange(e)
        updateHandler(JSON.parse(`{"${e.name}":"${e.value}"}`));
    }
  return (
    <>
    <div className='card'>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'><b>Wounds:&#160;</b>
                                <select className='form-control wounds' defaultValue={wounds} onChange={(e) => {statusUpdate({"name":"wounds","value":e.target.value})}}>
                                    <option value={"0"}>0</option>
                                    <option value={"1"}>1</option>
                                    <option value={"2"}>2</option>
                                    <option value={"3"}>3</option>
                                    <option value={"incapacitated"}>Incapacitated</option>
                                </select>
                            </li>
                            <li className='list-group-item'><b>Fatigue:&#160;</b> 
                            <select className='form-control wounds' defaultValue={fatigue} onChange={(e) => {statusUpdate({"name":"fatigue","value":e.target.value})}}>
                                <option value={"none"}>None</option>
                                <option value={"fatigued"}>Fatigued</option> 
                                <option value={"exhausted"}>Exhausted</option> 
                                <option value={"incapacitated"}>Incapacitated</option> 
                            </select>
                            </li>
                            <li className='list-group-item'><b>Shaken:</b> <input className="form-check-input" type="checkbox" onChange={checkShaken} checked={isShaken} /></li>
                        </ul>
                    </div>
    </>
    
  )
}
