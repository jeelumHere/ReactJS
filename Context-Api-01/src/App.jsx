import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
import AuthContextProvider from './context/AuthContextProvider'
import AdminPanel from './components/AdminPanel'

const App = () => {
  return (
    <>
      <UserContextProvider>
        <h1>
          I am App File. Learning Context API Part 01
        </h1>
        <Login />
        <Profile />
      </UserContextProvider>
      <div>.</div>
      <div>.</div>
      <div>.</div>
      <AuthContextProvider>
        <AdminPanel/>
      </AuthContextProvider>
    </>


  )
}

export default App
