import style from  '../boxes/box.module.css'

import React from 'react'

const Box = ({content, img, count, button}) => {
  return (
    <div className={style.box}   style={{ backgroundImage: `url(${img})` }}>
      <button className={style.count}>{count}</button>
      <div className={style.content}>
        <p>{content}</p>
        <div><button  className={style.btn}>{button}</button></div>
      </div>
    </div>
  )
}

export default Box
