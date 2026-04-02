import style from '../ColorBox/colorbox.module.css'

import React, { useState } from 'react'

const ColorBox = () => {

    const [size, setsize] = useState('20px')
    const [Colindex, setindex] = useState(0)
    const [bgindex, setbgindex] = useState(0)
    let bg = (['lightseagreen','lightcoral','lightblue','lightpink','lightgreen'])
    let color = (['#111','#222','#333','#444','#555'])

    return (
        <div className={style.container}>

            <div style={{backgroundColor:bg[bgindex]}} className={style.box}>
                <p style={{fontSize:size, color: color[Colindex]}}>I am a Color Box</p>
            </div>

            <div className="button">
                <button onClick={()=>{
                   bgindex!=4? setbgindex(prev=>(prev+1 % bg.length)) : setbgindex(0)
                }}>Change Background</button>
                <button onClick={()=>{
                    Colindex!=4? setindex(prev=>(prev+1 % color.length)) : setindex(0)
                }}>Change Color</button>
                <button onClick={()=>{
                    size=='20px'? setsize('25px') : setsize('20px')
                }}>Toggle Size</button>
            </div>



        </div>
    )
}

export default ColorBox
