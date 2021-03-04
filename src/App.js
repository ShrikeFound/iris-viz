import React, { useState} from 'react'
import Graph from './Graph'
import Dropdown from './Dropdown'

const App = () => {
  const [xLabel, setXLabel] = useState("Sepal Length");
  const [yLabel, setYLabel] = useState("Sepal Width");
  const width = 960;
  const height = 600;
  const margin = { top: 20, right: 20, bottom: 80, left: 80 }
  console.log(xLabel)
  const changeX = (e) => {
    setXLabel(e.target.value)
  }

  const changeY = (e) => {
    setYLabel(e.target.value)
  }

  return (
    <>
      <h1>Comparing Iris Species</h1>
      <Dropdown id="xLabel" onChange={changeX}/>
      <Dropdown id="yLabel" onChange={changeY}/>
      <Graph height={height} width={width} margin={margin} xAxisLabel={xLabel} yAxisLabel={yLabel}/>  
    </>
  )
}

export default App
