import style from '../image/image.module.css'

import React, { useState } from 'react'

const Image = () => {

    let urls = ['https://images.unsplash.com/photo-1773332611612-ffdaa753afb1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://media.istockphoto.com/id/1472057056/photo/modern-place-of-work.webp?a=1&b=1&s=612x612&w=0&k=20&c=iXqccOHZsWe-TkEkMv-NqyPjS4I9CW8u4mnfSCKKKrs=', 'https://media.istockphoto.com/id/1270008651/photo/japanese-digital-artist-contemplating-while-drinking-morning-coffee-at-his-home-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=4I9IoerDJoYmjdp88asd32mQUpr1zN72HyATMxYmzE4=', 'https://media.istockphoto.com/id/1447463861/photo/artist-working-in-cozy-studio.webp?a=1&b=1&s=612x612&w=0&k=20&c=-_kkb8DvLSKiEyDlGrBPnh9lvFWlLvolz2z2HjY8d2k=', 'https://images.unsplash.com/photo-1722159475057-5bb422a6a8d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3Ds']

    const [index, setindex] = useState(0)
    const [isDisabled1, setisDisabled1] = useState(false)
    const [isDisabled2, setisDisabled2] = useState(false)

    return (
        <div className={style.ImageContainer}>
            <div className={style.imageBox}>
                <img className={style.image} src={urls[index]} alt="" />

            </div>

            <div className={style.btn}>
                                {/* Right Arrow */}
                <button
                    className={style.rightArrow}
                    onClick={() => setindex(prev => prev + 1)}
                    disabled={index === urls.length - 1}
                >
                    →
                </button>

                {/* Left Arrow */}
                <button
                    className={style.leftArrow}
                    onClick={() => setindex(prev => prev - 1)}
                    disabled={index === 0}
                >
                    ←
                </button>

                <button onClick={()=>{
                    setindex(0)
                }}>
                    Go To Start
                </button>
            </div>




        </div>
    )
}

export default Image
