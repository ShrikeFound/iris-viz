import React from 'react'

const AxisLeft = ({yScale,innerWidth}) => {
  return (
    yScale.ticks().map(tickValue => {
            return (
              <g key={tickValue} transform = {`translate(${0},${yScale(tickValue)})`}>
                <line stroke="grey" x2={innerWidth} />              
                <text x={0 - 5}  style={{textAnchor: "end"}}>{tickValue}</text>
              </g>
            )
          })
  )
}

export default AxisLeft
