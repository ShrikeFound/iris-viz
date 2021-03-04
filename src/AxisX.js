import React from 'react'

const AxisBottom = ({xScale,innerHeight}) => {
  return (
    
    xScale.ticks().map(tickValue => {
            return (
              <g key={tickValue} transform = {`translate(${xScale(tickValue)},${0})`}>
                <line stroke="grey" y2={innerHeight} />              
                <text y={innerHeight + 5} dy=".72em" style={{textAnchor: "middle"}}>{tickValue}</text>
              </g>
            )
          })
  
  )
}

export default AxisBottom
