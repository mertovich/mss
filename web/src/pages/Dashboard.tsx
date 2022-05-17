import React from 'react'
import LineGraphs from '.././components/LineGraphs'
import { Container, Col, Row } from 'react-bootstrap'
import NavBar from '.././components/NavBar'
import DaysCard from '../components/DaysCard'
import TotalCard from '../components/TotalCard'

interface IProps {
  user: string | null
  handleLogout: () => void
  addData: (days: number, hour: number) => void
  data: number[]
  clearDashBoard: () => void
  total: number
}

const DashBoard: React.FC<IProps> = ({ user, handleLogout, addData, data, clearDashBoard, total }) => {
  return (
    <div>
      <NavBar user={user} handleLogout={handleLogout} clearDashBoard={clearDashBoard} />
      <Container className='text-center' >
        <LineGraphs data={data} />
      </Container >
      <Container style={{
        marginTop: '3%',
        marginBottom: '3%',
      }} >
        <Row className='text-center' >
          <Col >
            <DaysCard addData={addData} />
          </Col>
          <Col>
            <TotalCard total={total}/>
          </Col>
        </Row>
      </Container>
    </ div>
  )
}

export default DashBoard