import React from 'react'

const App = () => {
  const clickMe = () => {
    console.log('Mere ko aur maro', 7);
  }

  const PlzEnter = () => {
    console.log('tashreef le ayy h!!.')
  }

  const PlzOut = () => {
    console.log('niklo putrr !!')
  }

  function userInput(val) {
    console.log('User has typed...', val)
  }

  const scrollSpeed = (ele) => {
    console.log('Scroll Speed is...', ele.deltaY)
  }

  return (
    <div>


      <div className='page0'>
        <h1>Maar Kuttai Mission! Let's Go!!!</h1>

        <button onClick={clickMe}>Meke Maro</button>

        <button onMouseEnter={PlzEnter}>Entry Maro</button>

        <button onMouseLeave={PlzOut}>Go Out!</button>

        <button onKeyUpCapture={() => {
          console.log('I am an inside function')
        }}>Inside Functioon</button>

        <input onChange={function (Element) {
          userInput(Element.target.value)
        }} type="text" placeholder='Enter text...' />


        <div onMouseMove={(ele) => {
          console.log(ele.screenY)
        }} className="box"></div>
      </div>

      <section onWheel={function(ele){scrollSpeed(ele)}}>
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
      </section>



    </div>
  )
}

export default App