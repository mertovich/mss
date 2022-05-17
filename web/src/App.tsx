import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Month from './pages/Month'
import DashBoard from './pages/Dashboard'
import Login from './pages/Login'
import NavBar from './components/NavBar'

type Props = {}

const App = (props: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState<string | null>(null)
  const [data, setData] = useState<number[]>([])
  const [total, setTotal] = useState<number>(0)

  const handleLogin = (user: string) => {
    setIsLoggedIn(true)
    setUser(user)
    console.log(user)
    localStorage.setItem('user', user)
    localStorage.setItem('isLoggedIn', 'true')
    localStorage.setItem('data', JSON.stringify([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]))
    localStorage.setItem('total', '0')
  }

  const loginControl = async () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (isLoggedIn === 'true') {
      setIsLoggedIn(true)
      setUser(localStorage.getItem('user'))
      const tmpData = JSON.parse(localStorage.getItem('data') || '[]')
      setData(tmpData)
      setTotal(Number(localStorage.getItem('total') || '0'))
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUser(null)
    setTotal(0)
    localStorage.clear()
  }

  const addData = async (day: number, hour: number) => {
    const tmpData = data as number[]
    tmpData[day] = hour
    setData(tmpData)
    localStorage.setItem('data', JSON.stringify(tmpData))
    const getData = JSON.parse(localStorage.getItem('data') || '[]')
    setData(getData)
    totalMoney()
  }

  const clearDashBoard = () => {
    localStorage.setItem('data', JSON.stringify([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]))
    const getData = JSON.parse(localStorage.getItem('data') || '[]')
    setData(getData)
    localStorage.setItem('total', '0')
    setTotal(Number(localStorage.getItem('total') || '0'))
  }

  const totalMoney = () => {
    let sum = 0
    data.forEach(element => {
      sum += element
    }
    )
    setTotal(sum)
    localStorage.setItem('total', sum.toString())
  }

  useEffect(() => {
    loginControl()
  }, [])

  return (
    <div>
      <Routes>
        <Route path='mss/' element={isLoggedIn ? <div> <NavBar user={user} handleLogout={handleLogout} clearDashBoard={clearDashBoard}  /> <DashBoard total={total} data={data} addData={addData} /> </div> : <Login handleLogin={handleLogin} />} />
        <Route path="mss/month" element={<Month data={data} total={total} />} />
      </Routes>
    </div>
  )
}

export default App