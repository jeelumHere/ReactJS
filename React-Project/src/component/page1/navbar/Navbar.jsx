import style from '../navbar/navbar.module.css'

import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <div className={style.navbar}>
                <div>
                    <button className={style.btn}>Target Audience</button>
                </div>
                <ul className={style.list}>
                    <li>Digital</li>
                    <li>Banking</li>
                    <li>Platform</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
