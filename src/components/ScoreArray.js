import React from 'react';
import d4 from '../img/d4.svg';
import d4_selected from '../img/d4_selected.svg';
import d6 from '../img/d6.svg';
import d6_selected from '../img/d6_selected.svg';
import d8 from '../img/d8.svg';
import d8_selected from '../img/d8_selected.svg';
import d10 from '../img/d10.svg';
import d10_selected from '../img/d10_selected.svg';
import d12 from '../img/d12.svg';
import d12_selected from '../img/d12_selected.svg';
 
import '../stylesheets/ScoreArray.css';

export default function ScoreArray({diceLevel}) {
  return (
    <>
        {diceLevel >= 4 ? <img src={d4_selected} alt="d4red" className='dice'/>: <img src={d4} alt='d4' className='dice' /> }
        {diceLevel >= 6? <img src={d6_selected} alt='d6red' className='dice'/>: <img src={d6} alt='d6' className='dice' /> }
        {diceLevel >= 8 ? <img src={d8_selected} alt='d8red' className='dice'/>: <img src={d8} alt='d8' className='dice' /> }
        {diceLevel >= 10 ? <img src={d10_selected} alt='d10red' className='dice'/>: <img src={d10} alt='d10' className='dice' /> }
        {diceLevel >= 12 ? <img src={d12_selected} alt='d12red' className='dice'/>: <img src={d12} alt='d12' className='dice' /> }
    </>
  )
}
