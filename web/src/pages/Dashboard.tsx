import React from 'react'
import LineGraphs from '.././components/LineGraphs'
import { Container } from 'react-bootstrap'
import NavBar from '.././components/NavBar'
import DaysCard from '../components/DaysCard'

interface IPros {
  user: string | null
  handleLogout: () => void
  addData: (days: number, amount: number) => void
  data: number[]
}

const DashBoard: React.FC<IPros> = ({ user, handleLogout, addData, data }) => {
  return (
    <div>
      <NavBar user={user} handleLogout={handleLogout} />
      <Container className='text-center' >
        <LineGraphs data={data} />
      </Container >
      <DaysCard addData={addData} />
    </div >
  )
}

export default DashBoard