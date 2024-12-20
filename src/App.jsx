import React from 'react'
import {Route, Routes} from 'react-router-dom'
import "./index.css"
import Home from './routes/Home'
import About from './routes/About'
import Projects from './routes/Projects'
import Contact from './routes/Contact'


const App = () => {
  return (
    <>
    <Routes>
      <Route path= "/" element={<Home/>}/>
      <Route path= "/about" element={<About/>}/>
      <Route path= "/projects" element={<Projects/>}/>
      <Route path= "contact" element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App

