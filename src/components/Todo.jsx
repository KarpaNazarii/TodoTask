import React from 'react'

function Todo({id, title, description, status, onDelete}) {
  return (
    <div className='item'>
        <div className='item-id'>{id}</div>
        <div className='item-title'>{title.slice(0, 15)}{title.length >15 ? '...' : ''}</div>
        <div className='item-description'>{description.slice(0, 15)}{title.length >15 ? '...' : ''}</div>
        <input className='item-input'  type='checkbox'/>
        <button className='item-delete' onClick={onDelete}>Delete</button>
    </div>
  )
}

export default Todo