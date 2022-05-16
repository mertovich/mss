import React, { useState, useEffect } from 'react'
import DashBoard from './pages/Dashboard'
import Login from './pages/Login'

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
    localStorage.setItem('data', JSON.stringify([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]))
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
    localStorage.setItem('isLoggedIn', 'false')
    localStorage.setItem('user', '')
    localStorage.setItem('data', JSON.stringify([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]))
    setTotal(0)
  }

  const addData = async (day:number, amount:number) => {
    const tmpData = data as number[]
    tmpData[day] = amount
    setData(tmpData)
    localStorage.setItem('data', JSON.stringify(tmpData))
    const getData = JSON.parse(localStorage.getItem('data') || '[]')
    setData(getData)
    totalMoney()
  }

  const clearDashBoard = () => {
    localStorage.setItem('data', JSON.stringify([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]))
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
        {isLoggedIn ?
          <DashBoard total={total} clearDashBoard={clearDashBoard} data={data} addData={addData} handleLogout={handleLogout} user={user} />
          :
          <Login handleLogin={handleLogin} />
        }
    </div>
  )
}

export default App