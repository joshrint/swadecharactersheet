import React from 'react';
import d4 from '../../img/d4.svg';
import d4_selected from '../../img/d4_selected.svg';
import d6 from '../../img/d6.svg';
import d6_selected from '../../img/d6_selected.svg';
import d8 from '../../img/d8.svg';
import d8_selected from '../../img/d8_selected.svg';
import d10 from '../../img/d10.svg';
import d10_selected from '../../img/d10_selected.svg';
import d12 from '../../img/d12.svg';
import d12_selected from '../../img/d12_selected.svg';

export default function SelectDieType({diceLevel, attribute, handleSelect}) {
  return (
    <>
        {diceLevel >= 1 ? <img onClick={() => handleSelect(1, attribute)} src={d4_selected} alt="d4red" className='dice'/>: <img src={d4} onClick={() => handleSelect(1, attribute)} alt='d4' className='dice' /> }
        {diceLevel >= 2? <img onClick={() => handleSelect(2, attribute)} src={d6_selected} alt='d6red' className='dice'/>: <img src={d6} onClick={() => handleSelect(2, attribute)} alt='d6' className='dice' /> }
        {diceLevel >= 3 ? <img onClick={() => handleSelect(3, attribute)} src={d8_selected} alt='d8red' className='dice'/>: <img src={d8} onClick={() => handleSelect(3, attribute)} alt='d8' className='dice' /> }
        {diceLevel >= 4 ? <img onClick={() => handleSelect(4, attribute)} src={d10_selected} alt='d10red' className='dice'/>: <img src={d10} onClick={() => handleSelect(4, attribute)} alt='d10' className='dice' /> }
        {diceLevel >= 5 ? <img onClick={() => handleSelect(5, attribute)} src={d12_selected} alt='d12red' className='dice'/>: <img src={d12} onClick={() => handleSelect(5, attribute)} alt='d12' className='dice' /> }
    </>
  )
}
