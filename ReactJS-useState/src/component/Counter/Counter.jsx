import style from '../Counter/counter.module.css'

import React, { useState } from 'react'

const Counter = () => {
    const [val, setval] = useState(0)
    return (
        <div className={style.main}>
            <div className={style.counter}>
            <h2 className={style.screen}>Value : {val}</h2>

            <div>
                <button onClick={()=>{
                    setval(val+1)
                }}>Add 1</button>
                <button onClick={()=>{
                    setval(prev=>prev+1)
                    setval(prev=>prev+1)
                    setval(prev=>prev+1)
                    setval(prev=>prev+1)
                    setval(prev=>prev+1)
                }}>Add 5</button>
                <button onClick={()=>{
                    setval(val-3)
                }}>Subtract 3</button>
                <button onClick={()=>{
                    setval(0)
                }}>Reset</button>
            </div>
        </div>
        </div>
    )
}
export default Counter
