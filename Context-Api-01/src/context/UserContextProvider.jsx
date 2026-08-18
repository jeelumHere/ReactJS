import react, { useState } from "react"

import UserContext from "./UserContext"

const UserContextProvider = ({ children }) => {
    // 01   =>  Api calls comes here 
    // 02   =>  Here u stored the information
    // 03   =>  And then you pass the whatever information u want to the provider
    const [user, setUser] = useState(null)
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider