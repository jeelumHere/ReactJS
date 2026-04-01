import style from '../leftSide/leftSide.module.css'

import React from 'react'

const LeftSide = () => {
  return (
    <div className={style.leftSide}>

      <div>
        <h1>Prospective Customer Segmentation</h1>
        <p>Depending of customer satisfaction and access to banking products, potential target audeince
          can be dividedinto three groups.
        </p>
      </div>

      <h1 className={style.arrow}>↗ </h1>

    </div>
  )
}

export default LeftSide
