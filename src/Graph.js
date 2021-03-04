import React,{useEffect,useState} from 'react'
import { csv, scaleLinear, extent } from 'd3'
import AxisX from './AxisX';
import AxisY from './AxisY';
import AxisLabel from './AxisXLabel';
import Irises from './Irises';



const Graph = ({ width,height,margin }) => {

  const [data, setData] = useState(null);
  const url = "https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/iris.csv"

  console.log(data)
  useEffect(() => {
    const row = d => {
      d.sepal_length = +d.sepal_length
      d.sepal_width = +d.sepal_width
      d.petal_length = +d.petal_length
      d.petal_width = +d.petal_width
      return d
    }
    csv(url, row).then(setData)
  
  }, [])

  const xValue = d => d.sepal_length;
  const xAxisLabel = 'Sepal Length';
  const xAxisLabelOffset = 50;

  const yValue = d => d.sepal_width;
  const yAxisLabel = 'Sepal Width';
  const yAxisLabelOffset = 50;

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right
  const xScale = data ? scaleLinear().domain(extent(data, xValue)).range([0, innerWidth]).nice() : null
  const yScale = data ? scaleLinear().domain(extent(data, yValue)).range([0, innerHeight]) : null

  if (!data) {
    return (
      <p>Loading...</p>
    )
  } else {
    return (
      <svg  className="graph" width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.top})`}>
          

          
          <AxisX xScale={xScale} innerHeight={innerHeight} label={xAxisLabel} />          
          <AxisY yScale={yScale} innerWidth={innerWidth} />

          <Irises
            data={data}
            xScale={xScale}
            yScale={yScale}
            xValue={xValue}
            yValue={yValue}
            circleRadius = {6}
          />
          <AxisLabel
            x={innerWidth/2}
            y={innerHeight + xAxisLabelOffset}
            labelText= {xAxisLabel}
          />

          <AxisLabel
            x={-yAxisLabelOffset}
            y={innerHeight/2}
            labelText={yAxisLabel}
            rotate={true}
          />
          
          
        
        </g>

      </svg>
    )

  }
}

export default Graph
