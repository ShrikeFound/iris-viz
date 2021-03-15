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
      <div className="container">
      <div>
      <h1>Exploring the Iris Dataset</h1>
        <p>
          The graph below visually compares four features of 3 different species of Iris flowers from the <a href="https://en.wikipedia.org/wiki/Iris_flower_data_set" target="_blank">Iris Data Set</a>: Iris Setosa, Iris Versicolor, Iris Virginica. Compare the different features. Can you tell the different species apart without using the color legend?
        </p>
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
        </div>
        <Graph xAxisLabel={xLabel} yAxisLabel={yLabel} bodyHeight={bodyHeight} bodyWidth={bodyWidth} />
        </div>
    </>
  )
}

export default App
