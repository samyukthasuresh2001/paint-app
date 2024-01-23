import React from 'react'

const Menu = ({setBrushColor, setBrushWidth, setBrushOpacity}) => {
  return (
    <div className='menu'>
        <label htmlFor="brush">Brush Color:</label>
        <input type="color" onChange={(e) => setBrushColor(e.target.value)}/>

        <label htmlFor="brush-width">Brush-width:</label>
        <input type="range" min="3" max="20" onChange={(e) => setBrushWidth(e.target.value)}/>

        <label htmlFor="brush-opacity">Brush-Opacity:</label>
        <input type="range" min="0" max="0.5" step="0.01" onChange={(e) => setBrushOpacity(e.target.value)}/>

    </div>
  )
}

export default Menu