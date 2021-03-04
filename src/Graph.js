import React,{useEffect,useState} from 'react'
import { csv, scaleLinear, extent } from 'd3'
import AxisX from './AxisX';
import AxisY from './AxisY';
import AxisLabel from './AxisXLabel';
import Irises from './Irises';



const Graph = ({ width,height,margin,xAxisLabel,yAxisLabel }) => {

  const [data, setData] = useState(null);
  const url = "https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/iris.csv"

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

  let xValue;
  if (xAxisLabel === "Sepal Length") {
    xValue = d => d.sepal_length;
  } else if (xAxisLabel === "Sepal Width") {
    xValue = d => d.sepal_width;
  } else if (xAxisLabel === "Petal Length") {
    xValue = d => d.petal_length;
  }else{
    xValue = d => d.petal_width;
  }

  const xAxisLabelOffset = 50;

  let yValue;
  if (yAxisLabel === "Sepal Length") {
    yValue = d => d.sepal_length;
  } else if (yAxisLabel === "Sepal Width") {
    yValue = d => d.sepal_width;
  } else if (yAxisLabel === "Petal Length") {
    yValue = d => d.petal_length;
  }else{
    yValue = d => d.petal_width;
  }

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
            circleRadius = {9}
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
