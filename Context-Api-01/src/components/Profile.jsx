import React, { useState } from 'react'
import { useContext } from 'react'
import userContext from '../context/UserContext'
const Profile = () => {
    const { user } = useContext(userContext)

    if(!user) return <div>User not found</div>

    return <div>Welcome {user.username}</div>

}

export default Profile
