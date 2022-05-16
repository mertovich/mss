import React from 'react'
import LineGraphs from '.././components/LineGraphs'
import { Container } from 'react-bootstrap'
import NavBar from '.././components/NavBar'

interface IPros {
  user: string | null
  handleLogout: () => void
}

const DashBoard: React.FC<IPros> = ({ user, handleLogout }) => {
  return (
    <div>
      <NavBar user={user} handleLogout={handleLogout} />
      <Container className='text-center' >
        <LineGraphs />
      </Container >
    </div >
  )
}

export default DashBoard