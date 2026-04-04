
import style from "../Blog Content/blog.module.css";

import React, { useEffect, useState } from 'react'

const Blog = () => {

  const [saveCount, setSaveCount] = useState(0)
  const [mainData, setMainData] = useState('')
  const [blog, setBlog] = useState('')
  const [saving, setSaving] = useState('saving..')

  useEffect(()=>{
    let saveData = localStorage.getItem('blog')
    setMainData(saveData)
  },[])

  useEffect(()=>{
    
    if(!blog) return

    setSaving('saving..')
    let timer = setTimeout(() => {
      localStorage.setItem("blog",blog)
      setMainData(blog)
      setSaveCount(saveCount+1)
      setSaving('saved')
    }, 3000);

    return ()=> clearTimeout(timer)
  },[blog])

  return (
    <div className={style.blog}>
      <input onChange={(ele)=>{
        setBlog(ele.target.value)
      }} type="text" placeholder='enter text..' value={blog} />
      <h1>Data Blog : {mainData}</h1>
      <h1>save count : {saveCount}</h1>
      <h1>Status : {saving}</h1>
    </div>
  )
}

export default Blog


