import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import DashBoard from './pages/Dashboard'
import Login from './pages/Login'


type Props = {}

const App = (props: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState<string | null>(null)
  const [data, setData] = useState<number[]>([])

  const handleLogin = (user: string) => {
    setIsLoggedIn(true)
    setUser(user)
    console.log(user)
    localStorage.setItem('user', user)
    localStorage.setItem('isLoggedIn', 'true')
    localStorage.setItem('data', JSON.stringify([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]))
  }

  const loginControl = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (isLoggedIn === 'true') {
      setIsLoggedIn(true)
      setUser(localStorage.getItem('user'))
      const tmpData = JSON.parse(localStorage.getItem('data') || '[]')
      setData(tmpData)
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUser(null)
    localStorage.setItem('isLoggedIn', 'false')
    localStorage.setItem('user', '')
    localStorage.setItem('data', JSON.stringify([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]))
  }

  const addData = (day:number, amount:number) => {
    const tmpData = data as number[]
    tmpData[day] = amount
    setData(tmpData)
    localStorage.setItem('data', JSON.stringify(tmpData))
    const getData = JSON.parse(localStorage.getItem('data') || '[]')
    setData(getData)
  }

  const clearDashBoard = () => {
    localStorage.setItem('data', JSON.stringify([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]))
    const getData = JSON.parse(localStorage.getItem('data') || '[]')
    setData(getData)
  }

  useEffect(() => {
    loginControl()
  }, [])

  return (
    <div>
      <Routes>
        {isLoggedIn ?
          <Route path="/" element={<DashBoard clearDashBoard={clearDashBoard} data={data} addData={addData} handleLogout={handleLogout} user={user} />} />
          :
          <Route path="/" element={<Login handleLogin={handleLogin} />} />
        }
      </Routes>
    </div>
  )
}

export default App