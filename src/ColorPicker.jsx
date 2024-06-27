import React, {useState} from 'react'

function ColourPicker() {

    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(event){
      setColor(event.target.value);
    }

  return (
    <div className='color-picker-container'>
      <h1>Clour Picker</h1>
      <div className='color-display' style={{backgroundColor: color}}>
        <p>Selected Color: {color}</p>
      </div>
      <label>Select a colour</label>
      <input type='color' value={color} onChange={handleColorChange}/>
    </div>
  )
}

export default ColourPicker
