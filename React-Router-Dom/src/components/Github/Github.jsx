import React from 'react'
import { useLoaderData } from 'react-router-dom'
import axios from "axios"
export const Github = () => {
    const data = useLoaderData()
    return (
        <div className='text-3xl text-amber-400 text-center bg-gray-200 rounded-lg flex justify-center items-center flex-col gap-3 p-5 m-5'>
            <h1>Github Followers : {data.followers}</h1>
            <h1>Github Name : {data.name}</h1>
            <div><img src={data.avatar_url} alt="My Avatar" width={300} className='rounded-lg' /></div>
        </div>
    )
}

export const githubInfo = async () => {
    const response = await axios.get("https://api.github.com/users/jeelumHere")
    console.log(response.data);

    return response.data
}