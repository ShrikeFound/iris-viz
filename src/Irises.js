import React from 'react'

const Irises = ({ data, xScale, yScale, xValue, yValue, circleRadius }) => {
  
  const irisColor = (iris) => {
    const s = iris.species
    if (s === "setosa") return "#A37FCF"
    if (s === "virginica") return "#442978"
    return "#56AFB5"
  }

  return (
    data.map(d => <circle cx={xScale(xValue(d))} cy={yScale(yValue(d))} r={circleRadius} fill={irisColor(d)} />)
  )
}

export default Irises
