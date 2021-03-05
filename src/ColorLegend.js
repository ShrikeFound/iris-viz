import React from 'react'

const ColorLegend = ({colorMap}) => {
  return (
    Object.keys(colorMap).map((species,idx) => 
      (
        <g transform={`translate(0,${idx*40})`}>
          <circle fill={colorMap[species]} r={7} />
        <text className="axis-label" x={10} y={4}>{species}</text>
        </g>        
      )
    )
  )
}

export default ColorLegend
