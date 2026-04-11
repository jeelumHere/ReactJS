import React, { useState } from 'react'
import Button from './Component/Button'

const App = () => {

  const [Theme, setTheme] = useState('Light')

  return (
    <div>
      <Button theme ={Theme} changeTheme = {setTheme} />
    </div>
  )
}

export default App
