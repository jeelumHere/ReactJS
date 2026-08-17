import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const {id} = useParams()
    return (
        <>
            <h1 className='text-3xl text-amber-400 text-center bg-gray-500 p-5 m-5'>
                User : {id}
            </h1>
        </>
    )
}

export default User
