import React, { useState } from 'react'
import { useContext } from 'react'
import AuthContextProvider from '../context/AuthContextProvider'
import AuthContext from '../context/AuthContext'


const AdminPanel = () => {
    const { isAdmin, setIsAdmin } = useContext(AuthContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async () => {
        if ((username === "admin" || username === "Admin") && (password === "12345")) {
            setIsAdmin(true)
        }
        {
            isAdmin ?
                setMessage("Welcome to admin panel") :
                setMessage("You are not admin")
        }
    }
    return (
        <div>

            <div><input type="text" placeholder='Admin Username' value={username}
                onChange={(e) => (setUsername(e.target.value))}
            /></div>
            <div><input type="text" placeholder='Admin Password' value={password}
                onChange={(e) => (setPassword(e.target.value))}
            /></div>
            <button onClick={handleSubmit}>Submit</button>
            <h1>{message}</h1>
        </div>
    )
}



export default AdminPanel
