import './App.css';
import React , {useState,useEffect} from 'react';
import Values from 'values.js';
import Color from './Color';

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [gotColors, setGotColors] = useState(new Values(`#ffffff`).all(10))
  function submit(e) {
    e.preventDefault()
    try {
      setError(false)
      let allColors = new Values(color).all(10);
      setGotColors(allColors)
      
    } catch (error) {
      setError(true);
      setGotColors([]);
      console.error("Error : " + error)
    }
  }

  useEffect(() => {
    let clr = setTimeout(()=>{
      setError(false)
    },2000)
    return ()=>clearTimeout(clr)
  }, [error])

  return (
    <>
      <section className="form">
        <h1>HexaColors</h1>
        <form onSubmit={submit}>
          <input type="text" id="color" className={`inputColor`} placeholder="#ffffff" value={color} onChange={(e)=>{setColor(e.target.value)}}/>
          <button type="submit">Colors</button>
        </form>
        {error && <h1 style={{fontFamily:'cursive',color:'#000000',fontSize:'7vmin'}}>No Color Found</h1>}
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
