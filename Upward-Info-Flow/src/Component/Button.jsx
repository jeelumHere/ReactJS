import React from 'react'

const Button = (props) => {

    const ChangeTheme = ()=>{
        console.log('theme is changed..')
        props.theme === 'Dark' ? props.changeTheme('Light') : props.changeTheme('Dark')
        props.theme === 'Dark' ? document.getElementById('div').classList.add('div') :
         document.getElementById('div').classList.remove('div')
    }

  return (
    <div>
        <h1>Theme is {props.theme}</h1>
      <button onClick={ChangeTheme}>Change Theme</button>
    </div>
  )
}

export default Button
