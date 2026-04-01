import style from '../page1/page1.module.css'

import React from 'react'
import Navbar from './navbar/Navbar'
import LeftSide from './leftSide/LeftSide'
import Box from './boxes/Box'

let boxes = [
  {count :1 ,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLlVpngXueoImxSmgwlAuinFZy-710v-eeFw&s", content : "Prime customers that have access to bank credit and are satisfied with the current product.",button : "Satisfied →"},
  {count :2 ,img:"https://img.freepik.com/premium-photo/dark-portrait-smiling-man-using-smartphone-background-night-city_379201-4229.jpg", content : "Customers who have recently made a purchase and are looking for similar products.",button : "Interested →"},
  {count :3 ,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQciXBtFZqOwynZRG0fJ3i4edqapX-M39oflw&s", content : "Potential customers who have shown interest in our services but haven't made a purchase yet.",button : "Not Interested →"}
]


const Page1 = () => {
  return (
    <>
      <Navbar/>
      <div className={style.container}>
        <LeftSide/>
        {boxes.map((box)=>(
          <Box key={box.count} content={box.content} img={box.img} count={box.count} button={box.button}/>
        ))}  
      </div>
    </>  
  )
}

export default Page1
