import React from 'react'

const AxisXDropdown = ({ id,onChange}) => {
  return (
    <select id={id} onChange={onChange}>
      <option value="">Please select an option</option>
      <option value="Sepal Length" selected="selected">Sepal Length</option>
      <option value="Sepal Width">Sepal Width</option>
      <option value="Petal Length">Petal Length</option>
      <option value="Petal Width">Petal Width</option>
      
    </select>
  )
}

export default AxisXDropdown
