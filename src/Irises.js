import React from 'react'

const Irises = ({ data, xScale, yScale, xValue, yValue, circleRadius,colorMap }) => {

  return (
    data.map(d => <circle cx={xScale(xValue(d))} cy={yScale(yValue(d))} r={circleRadius} fill={colorMap[d.species]} />)
  )
}

export default Irises
