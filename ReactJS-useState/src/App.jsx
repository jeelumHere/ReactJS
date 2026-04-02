import react , { useState } from "react"
import Counter from "./component/Counter/Counter"
import ColorBox from "./component/ColorBox/ColorBox"
import Image from "./component/image/Image"




const App = () => {
  return (
    <div>
      <Counter/>
      <ColorBox/>
      <Image/>
    </div>
  )
}

export default App