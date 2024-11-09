import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import GetStarted from './components/GetStarted'
import Shorten from './components/Shorten'
import Footer from './components/Footer'
import Boost from './components/Boost'
import Advance from './components/Advance'

function App() {
  return (
    <div className='w-full h-auto overflow-y-hidden'>
      <NavBar />
      <GetStarted />
      <Shorten />
      <Advance />
      <Boost />
      <Footer />
    </div>
  )
}

export default App
