import React from 'react';

export default function AddFooterButtons({saveAndClose}) {
  return (
    <>
      <button className='btn btn-outline-success' onClick={saveAndClose}>Save</button>
    </>
  )
}
