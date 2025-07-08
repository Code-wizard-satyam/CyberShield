import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './Auth/Signup'
import Login from './Auth/Login'
import HomeUser from './pages/Home_User'
import HomeGuest from './pages/Home_Guest'
import Aboutus from './pages/Aboutus'
import Report from './pages/Report'
import Community from './pages/Community'
import ASK_AI from './pages/ask_ai'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        {/* You can add more routes here, e.g., <Route path="/login" element={<Login />} /> if needed */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/homeuser" element={<HomeUser />} /> 
        <Route path="*" element={<HomeGuest />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/report" element={<Report />} />
        <Route path="/community" element={<Community />} />
        <Route path="/ask_ai" element={<ASK_AI />} />
      </Routes>
    </Router>
  )
}

export default App
