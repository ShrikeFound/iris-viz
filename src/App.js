import React, { useState,useEffect} from 'react'
import Graph from './Graph'
import AxisXDropdown from './AxisXDropdown'
import AxisYDropdown from './AxisYDropdown'

const App = () => {
  const [xLabel, setXLabel] = useState("Sepal Length");
  const [yLabel, setYLabel] = useState("Sepal Width");
  const [bodyWidth, setBodyWidth] = useState(document.body.clientWidth)
  const [bodyHeight, setBodyHeight] = useState(document.body.clientHeight)
  


  console.log(bodyHeight,bodyWidth)
  
  
  
  const changeX = (e) => {
    setXLabel(e.target.value)
  }

  const changeY = (e) => {
    setYLabel(e.target.value)
  }



  return (
    <>
      <h1>Exploring the Iris Dataset</h1>
      <div className="center-content">
        <div className="center-content">
          <label htmlFor="xLabel">X Axis Value</label>
          <AxisXDropdown id="xLabel" onChange={changeX}/>
        </div>
        
        <div className="center-content">
          <label htmlFor="xLabel">Y Axis Value</label>
          <AxisYDropdown id="yLabel" onChange={changeY} />
        </div>
      </div>
        <Graph xAxisLabel={xLabel} yAxisLabel={yLabel} bodyHeight={bodyHeight} bodyWidth = {bodyWidth} />
    </>
  )
}

export default App
