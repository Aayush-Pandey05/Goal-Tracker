import React from 'react'
import Home from './components/Home'
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Goals from './components/Goals'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/goals" element={<Goals />} />
      </Routes>
    </Router>
  )
}

export default App