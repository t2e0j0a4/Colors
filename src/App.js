import './App.css';
import React , {useState} from 'react';
import Values from 'values.js';
import Color from './Color';

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [gotColors, setGotColors] = useState(new Values(`#ffffff`).all(10))
  function submit(e) {
    e.preventDefault()
    try {
      let allColors = new Values(color).all(10);
      setGotColors(allColors)
      
    } catch (error) {
      setError(true)
      console.error("Error : " + error)
    }
  }
  return (
    <>
      <section className="form">
        <h1>HexaColors</h1>
        <form onSubmit={submit}>
          <input type="text" id="color" className={`${error ? `errorColor` :  `inputColor`}`} placeholder="#ffffff" value={color} onChange={(e)=>{setColor(e.target.value)}}/>
          <button type="submit">Colors</button>
        </form>
      </section>
      <section className="colors">
        {gotColors.map((eachColor,index)=>{
          return (<Color key={index} {...eachColor} index={index} hex={eachColor.hex}/>)
        })}
      </section>
    </>
  );
}

export default App;
