import React , {useState,useEffect} from 'react'

export default function Color({index , rgb , weight , hex}) {
    const rgbToString = rgb.join(',');
    const [alert, setAlert] = useState(false)
    const hexWithHash = `#${hex}`
    const copying = () => {
        setAlert(true);
        navigator.clipboard.writeText(hexWithHash);
    }

    useEffect(() => {
      let clr = setTimeout(()=>{
        setAlert(false)
      },2000)
      return ()=>clearTimeout(clr)
    }, [alert])


  return (
    <>
        <article style={{backgroundColor : `rgb(${rgbToString}`}} onClick={copying}>
            <h1 className={`${index > 10 && 'color-light'}`}>{hexWithHash}</h1>
            <p className={`${index > 10 && 'color-light'}`}>{weight}%</p>
            {alert && <p className={`${index > 10 && 'color-light'}`} style={{paddingTop: '10px'}}>Copied To Clipboard</p>}
        </article>
    </>
  )
}
