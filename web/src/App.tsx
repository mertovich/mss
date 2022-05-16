import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import DashBoard from './pages/DashBoard'
import Login from './pages/Login'


type Props = {}

const App = (props: Props) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  const [user, setUser] = useState<string | null>(null)

  const handleLogin = (user: string) => {
    setIsLoggedIn(true)
    setUser(user)
    console.log(user)
    localStorage.setItem('user', user)
    localStorage.setItem('isLoggedIn', 'true')
  }

  const loginControl = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (isLoggedIn === 'true') {
      setIsLoggedIn(true)
      setUser(localStorage.getItem('user'))
    }
  }

  useEffect(() => {
    loginControl()
  }, [])

  return (
    <div>
      <Routes>
        {isLoggedIn ?
          <Route path="/" element={<DashBoard user={user} />} />
          :
          <Route path="/" element={<Login handleLogin={handleLogin} />} />
        }
      </Routes>
    </div>
  )
}

export default App