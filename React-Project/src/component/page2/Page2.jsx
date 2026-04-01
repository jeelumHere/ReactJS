import style from '../page2/page2.module.css'

import React from 'react'
import LeftContent from './leftContent/LeftContent'
import RightContent from './rightContent/RightContent'

const Page2 = () => {
  return (
    <div className={style.page2}>
      <LeftContent/>
      <RightContent/>
    </div>
  )
}

export default Page2
