import React from 'react';
import "./stylesheets/DerivedStats.css";

export default function DerivedStats({pace, parry, toughness, reason, status}) {
  return (
    <>
    <div className='row row-cols-2 g-2'>
        
        <div className='card derived-card'>
            <div className='card-header'><h5>Pace</h5></div>
            <div className='card-body'>
                <p className='card-text'>{pace}</p>
            </div>
        </div>
        <div className='card derived-card'>
            <div className='card-header'><h5>Parry</h5></div>
            <div className='card-body'>
                <p className='card-text'>{parry}</p>
            </div>
        </div>
        <div className='card derived-card'>
            <div className='card-header'><h5>Toughness</h5></div>
            <div className='card-body'>
                <p className='card-text'>{toughness}</p>
            </div>
        </div>
        <div className='card derived-card'>
            <div className='card-header'><h5>Reason</h5></div>
            <div className='card-body'> 
                <p className='card-text'>{reason}</p>
            </div>
        </div>
        <div className='card derived-card'>
            <div className='card-header'><h5>Status</h5></div>
            <div className='card-body'>
                <p className='card-text'>{status}</p>
            </div>
        </div>
        <div className='card derived-card'>
            <div className='card-body'>
                <h5 className='card-title'></h5>
                <p className='card-text'></p>
            </div>
        </div>
    </div>
    </>
  )
}
