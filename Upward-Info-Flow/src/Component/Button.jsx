import React from 'react'
import { useState, } from 'react'

const Button = (props) => {




    const ChangeTheme = ()=>{
        console.log('theme is changed..')
        props.theme === 'Dark' ? props.changeTheme('Light') : props.changeTheme('Dark')
        props.theme === 'Light' ? document.body.classList.add('div') :
         document.body.classList.remove('div')
    }

  return (
    <div>
        <h1>Theme is {props.theme}</h1>
      <button onClick={ChangeTheme}>Change Theme</button>
    </div>
  )
}

export default Button
