import React, { useState } from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)

    const handleSubmit = async (e) => {
        e.preventDefault()

        setUser({ username, password })

    }

    return (
        <>
            <div>
                <h2>Login To Your Account</h2>
                <input type="text" placeholder='Username' value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <div>Gap</div>
                <input type="text" placeholder='Password' value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit' onClick={handleSubmit}>Submit</button>
            </div>
        </>
    )
}

export default Login
