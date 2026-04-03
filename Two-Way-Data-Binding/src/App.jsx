

import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    setTitle('')
  }

  function changeObserver(e){
    setTitle(e.target.value)
    console.log(e.target.value)
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input onChange={changeObserver} type="text" placeholder='Enter text..'  value={title}/>
        <button className='submit'>DabbaPutrr</button>
        <button className='submit'>Submit</button>
      </form>
        <button className='submit'>Helo</button>

      <h1>Title : {title}</h1>
    </div>
  )
}

export default App
