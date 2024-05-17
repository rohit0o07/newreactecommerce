import React from 'react'
import { Outlet } from 'react-router-dom'
import NavItems from './components/NavItems'

const App = () => {
  return (
    <div>
      <NavItems/>
      <Outlet/>
    </div>
  )
}

export default App

