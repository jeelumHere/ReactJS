import React, { useState } from 'react'
import AuthContext from './AuthContext'

function AuthContextProvider({children}) {
    const [isAdmin, setIsAdmin] = useState(false)
    return (
        <>
            <AuthContext.Provider value={{isAdmin,setIsAdmin}}>
                {children}
            </AuthContext.Provider>
        </>
    )
}

export default AuthContextProvider
