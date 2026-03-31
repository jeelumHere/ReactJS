import style from '../footer/footer.module.css'

import React from 'react'

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.border}></div>
      <div className={style.content}>
        <div className={style.follow}>
        <p> 2023 My Portfolio. All rights reserved.</p>
            <div className={style.social}>
                <h4>Follow Me</h4>
                <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyajJsikophYoAzT2SLX02wSX161zM_8KdyA&s" alt="twitter" /></li>
                <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFKUd8TKlGho5jUUcPimr0MKnVEyIP3uI-TQ&s" alt="github" /></li>
                <li><img src="https://img.freepik.com/premium-vector/linkedin-logo_1273375-1269.jpg?semt=ais_incoming&w=740&q=80" alt="linkedin" /></li>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
