import React, { useState } from 'react'
import { useDarkMode } from '../hooks/useDarkMode'


const Navbar = () => {

  // const [darkMode, setDarkMode] = useState(false)


  // const [darkMode] = useDarkMode({
  //   enabled: false
  // })

  const [darkMode, toggleMode] = useDarkMode("darkMode", {
    enabled: false
  })


  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  )
}

export default Navbar
