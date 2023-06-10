import React from 'react';

export default function EditFooterButtons({saveAndClose, handleDelete}) {
  return (
    <>
        <button className='btn btn-outline-success' onClick={saveAndClose}>Save</button><button className='btn btn-outline-danger' onClick={handleDelete}>Delete</button>
    </>
  )
}
