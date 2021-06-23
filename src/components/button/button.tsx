import React from 'react'

import "./button.css"

interface propsButton{
  onClick: () => void
}

function button(props: propsButton) {
  return (
    <div className="containerButton">
      <button onClick={props.onClick}>+</button>
    </div>
  )
}

export default button