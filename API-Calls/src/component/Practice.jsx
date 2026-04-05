import React, { useState } from 'react'
import axios from 'axios'



const Practice = () => {

  const [data, setData] = useState([])

   const getData = async ()=>{

    // Api call through axios

    console.log("data loading...")

    let {data} = await axios.get('https://picsum.photos/v2/list')

    console.log(data)

    setData(data)

    console.log("data loaded..")

    // Api call through fetch and async await

    // console.log("data loading...")
    // let response = await fetch('https://jsonplaceholder.typicode.com/todos') 
    // console.log("Api fetched.")
    // console.log("converting to json format.")
    // let dataJson = await response.json()
    // console.log(dataJson)
    // console.log("data loaded.")

 
    
   }



  return (
    // practicing api call by fetch axios method.


    <div>
      <button onClick={getData}>Get Data</button>
      <div className="box">
        {data.map((d,idx)=>(
          <h3 key={idx}>  
          <span>key: {idx} ,</span>
          <span>author : {d.author} ,</span> 
          <span>url : {d.url}</span>
          </h3>
        ))}
      </div>
    </div>
  )
}

export default Practice
