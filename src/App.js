import React from 'react'
import Graph from './Graph'

const App = () => {
  
  const width = 960;
  const height = 600;
  const margin = { top: 20, right: 20, bottom: 100, left: 100 }


  return (
    <>
      <h1>Comparing Iris Species</h1>
      <Graph height={height} width={width} margin={margin}/>  
    </>
  )
}

export default App
