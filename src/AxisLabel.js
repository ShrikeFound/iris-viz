import React from 'react'

const AxisLabel = ({x = 0,y = 0,labelText,rotate}) => {
  return (
    <text
      className="axis-label"
      x={rotate ? 0 : x}
      y={rotate ? 0 : y}
      textAnchor="middle"
      transform = {rotate ? `translate(${x},${y}) rotate(${rotate ? -90 : 0})` : ""}
    >
      {labelText}
    </text>
  )
}

export default AxisLabel 