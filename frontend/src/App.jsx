import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './Auth/Signup'
import Login from './Auth/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        {/* You can add more routes here, e.g., <Route path="/login" element={<Login />} /> if needed */}
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App
