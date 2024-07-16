import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'

//Pages.
import Home from './pages/Home'
import Error from './pages/Error'


function App() {
  

  return (
    <>
    <div className="container d-flex justify-content-center align-items-center flex-column">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error/>} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
    </>
  )
}

export default App
