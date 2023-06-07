import React from 'react';
import "../stylesheets/DerivedStats.css";
//Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

export default function DerivedStats({pace, parry, toughness, reason, status}) {
  return (
    <>
    <div className='row row-col-1 row-col-md-2'>
            <div className='card derived-card  px-0'>
                <h5 className='card-header'>Pace<FontAwesomeIcon icon={faPenToSquare} className='edit-icon' /></h5>
                <div className='card-body'>
                    <p className='card-text'>{pace}</p>
                </div>
            </div>
            <div className='card derived-card  px-0'>
                <h5 className='card-header'>Parry<FontAwesomeIcon icon={faPenToSquare} className='edit-icon' /></h5>
                <div className='card-body'>
                    <p className='card-text'>{parry}</p>
                </div>
            </div>
            <div className='card derived-card  px-0'>
                <h5 className='card-header'>Toughness<FontAwesomeIcon icon={faPenToSquare} className='edit-icon' /></h5>
                <div className='card-body'>
                    <p className='card-text'>{toughness}</p>
                </div>
            </div>
            <div className='card derived-card  px-0'>
                <h5 className='card-header'>Reason<FontAwesomeIcon icon={faPenToSquare} className='edit-icon' /></h5>
                <div className='card-body'> 
                    <p className='card-text'>{reason}</p>
                </div>
            </div>
            <div className='card derived-card  px-0'>
                <h5 className='card-header'>Status<FontAwesomeIcon icon={faPenToSquare} className='edit-icon' /></h5>
                <div className='card-body'>
                    <p className='card-text'>{status}</p>
                </div>
            </div>
            <div className='card derived-card  px-0'>
                <div className='card-body'>
                    
                </div>
            </div>
        
        
    </div>
    </>
  )
}
