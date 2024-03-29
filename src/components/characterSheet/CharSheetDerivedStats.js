import React from 'react';
import "../../stylesheets/DerivedStats.css";
import EditDerivedStat from '../edit/EditDerivedStat';



export default function CharSheetDerivedStats({pace, parry, toughness, reason, status, wealth, handleChange, updateHandler}) {

    const handleStatChange = (e) =>{
        handleChange({"name":e.skill, "value":e.score});
        updateHandler(JSON.parse(`{"${e.skill}":"${e.score.toString()}"}`));
    }

  return (
    <>
        <div className='row'>
            <div className='col col-left'>
                <div className='card derived-card  px-0'>
                    <h5 className='card-header'>Pace<EditDerivedStat name={"pace"} editclass={'edit-icon'} stat={pace} handleStatChange={handleStatChange} /></h5>
                    <div className='card-body'>
                        <p className='card-text'>{pace}</p>
                    </div>
                </div>
            </div>
            <div className='col col-right'>
                <div className='card derived-card  px-0'>
                    <h5 className='card-header'>Parry<EditDerivedStat name={"parry"} editclass={'edit-icon'} stat={parry} handleStatChange={handleStatChange}  /></h5>
                    <div className='card-body'>
                        <p className='card-text'>{parry}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col col-left'>
                <div className='card derived-card  px-0'>
                    <h5 className='card-header'>Toughness<EditDerivedStat name={"toughness"} editclass={'edit-icon'} stat={toughness} handleStatChange={handleStatChange}  /></h5>
                    <div className='card-body'>
                        <p className='card-text'>{toughness}</p>
                    </div>
                </div>
            </div>
            <div className='col col-right'>
                <div className='card derived-card  px-0'>
                    <h5 className='card-header'>Reason<EditDerivedStat name={"reason"} editclass={'edit-icon'} stat={reason} handleStatChange={handleStatChange}  /></h5>
                    <div className='card-body'> 
                        <p className='card-text'>{reason}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='row last-row'>
            <div className='col col-left'>
                <div className='card derived-card  px-0'>
                    <h5 className='card-header'>Status<EditDerivedStat name={"status"} editclass={'edit-icon'} stat={status} handleStatChange={handleStatChange}  /></h5>
                    <div className='card-body'>
                        <p className='card-text'>{status}</p>
                    </div>
                </div>
            </div>
            <div className='col col-right'>
                <div className='card derived-card  px-0'>
                    <h5 className='card-header'>Wealth<EditDerivedStat name={"wealth"} editclass={'edit-icon'} stat={wealth} handleStatChange={handleStatChange} /></h5>
                    <div className='card-body'>
                        <p className='card-text'>£{wealth}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
