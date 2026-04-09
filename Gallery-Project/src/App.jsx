import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  useEffect(function(){
    getData()
  },[index])

  async function getData() {
    let resp = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=20`)
    console.log(resp.data)
    setUserData(resp.data)
  }

  let printUserData = <h5 className='load'>Loading....</h5>

  if (userData.length > 0) {
    printUserData = userData.map(function (ele, idx) {
      return (
        <div key={idx}>
          <div className='img'><a href={ele.url} target='_blank'><img src={ele.download_url} alt={idx} /></a></div>
          <div className='author'><strong>Photographed by {ele.author} </strong></div>
        </div>
      )
    })
  }

  return (
    <>
    <h1 className='pageNo'>{index}</h1>
    <div className='GallFold'>
      
      {/* <button onClick={getData} className='btn'>Get Data</button> */}
      <div className='gallery'>{printUserData}</div>
      <div className='divBtn'>
        <button onClick={()=>{
          if(index>1){
            setIndex(index-1)
            setUserData([])
          }
        }} className='btn' disabled>Prev</button>
        <button onClick={()=>{
          if(index<3){
            setIndex(index+1)
            setUserData([])
          }
        }} className='btn'>Next</button>
      </div>
    </div>
    </>
  )
}

export default App
