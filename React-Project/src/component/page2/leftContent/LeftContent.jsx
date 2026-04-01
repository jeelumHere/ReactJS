import style from '../leftContent/leftcontent.module.css'

import React from 'react'

const LeftContent = () => {
  return (
    <div className={style.leftContent}>
      <h1>The <span className={style.opp}>Opportunity</span></h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem mollitia alias quibusdam odio itaque recusandae ullam ad sapiente, minima temporibus libero provident voluptas incidunt hic accusamus quae ratione nemo sequi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente rerum itaque reiciendis exercitationem et voluptatibus laborum repellat ipsa!</p>
      <button className={style.btn}>Move Forward</button>
    </div>
  )
}

export default LeftContent
