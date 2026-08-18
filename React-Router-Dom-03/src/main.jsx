import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import Login from './pages/Login'
import ResetPassword from './pages/ResetPassword'
import Images from './pages/Images'
import Files from './pages/Files'
import PersonalLayout from './layout/PersonalLayout'
import Subject from './pages/Subject'
import Assighnment from './pages/Assighnment'
import Quiz from './pages/Quiz'
import Notes from './pages/Notes'
import PastPaper from './pages/PastPaper'
import PublicLayout from './layout/PublicLayout'
import GroupsLayout from './layout/GroupsLayout'
import NotFound from './pages/NotFound'
import Personal from './pages/Personal'
import Layout from './pages/Layout'
import SubjectLayout from './layout/SubjectLayout'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
        <Route path='resetPassword' element={<ResetPassword />} />
      </Route>

      <Route path='dashboard' element={<Dashboard />}>
        <Route index element={<Layout />} />

        <Route path=':section' element={<PersonalLayout />}>
          <Route index element={<Personal />} />

          <Route path=':subject' element={<Subject />}>
            <Route index element={<SubjectLayout />}/>
            <Route path='assighnment' element={<Assighnment />}>
              <Route path='images' element={<Images />} />
              <Route path='files' element={<Files />} />
            </Route>
            <Route path='quiz' element={<Quiz />}>
              <Route path='images' element={<Images />} />
              <Route path='files' element={<Files />} />
            </Route>
            <Route path='notes' element={<Notes />}>
              <Route path='images' element={<Images />} />
              <Route path='files' element={<Files />} />
            </Route>
            <Route path='pastPapers' element={<PastPaper />}>
              <Route path='images' element={<Images />} />
              <Route path='files' element={<Files />} />
            </Route>
          </Route>
        </Route>
      </Route>

      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
