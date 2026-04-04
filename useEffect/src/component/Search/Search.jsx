
import style from '../Search/search.module.css'

import React, { useEffect, useState } from 'react'

const Search = () => {

  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [hint, setHint] = useState('')
  const [status, setstatus] = useState('')
  const [count, setCount] = useState(0)

  useEffect(() => {
    setHint('type more than 3 character')
    if (search.length<3){
      setData([])
      return
    } 
    setHint('Good to go!')
    setstatus('data laoding..')
    let timer = setTimeout(async () => {
      let apiData = await fetch('https://jsonplaceholder.typicode.com/users')
      let userData = await apiData.json()
      console.log(userData)
      setData(userData)
      setstatus('data loaded')
      setCount(prev=>prev + 1)
    }, 2000);

    return () => clearTimeout(timer)
  }, [search])



  return (
    <div className={style.search}>
      <input onChange={(ele) => {
        setSearch(ele.target.value)
      }} type="text" placeholder='search..' value={search} />

      <h3>Status : {status}</h3>
      <h3>Count  : {count}</h3>
      <h3>Hint   :  {hint}</h3>


      {data.map((user, idx) => (
        <h3 key={idx}>
          Name : {user.name} , email : {user.email}
        </h3>
      ))}

    </div>
  )
}

export default Search

