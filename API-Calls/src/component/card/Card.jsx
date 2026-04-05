import React from 'react'

import axios from "axios";


const Card = async () => {

    // using axios mehod for api calling
   let apiData = fetch('https://rickandmortyapi.com/api/character?page=1&name=rick&status=alive')
   .then(response=> response.json())
   .then(json=>console.log(json))
   .catch(err=>console.log("error : ",err))
 


  return (
    <div>
      
    </div>
  )
}

export default Card
