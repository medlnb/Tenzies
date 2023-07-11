import React from 'react'

function Die(props) {
  return (
    <button
      className={props.isHled ? 'button-helded' : 'button'}
      onClick={() => props.HandleClick(props.id)}>
      {props.value}
      
      
    </button>
  )
}

export default Die