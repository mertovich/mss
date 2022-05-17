import React from 'react'
import LineGraphs from '.././components/LineGraphs'
import { Container, Col, Row } from 'react-bootstrap'
import DaysCard from '../components/DaysCard'
import TotalCard from '../components/TotalCard'

interface IProps {
  addData: (days: number, hour: number) => void
  data: number[]
  total: number
}

const DashBoard: React.FC<IProps> = ({ addData, data, total }) => {
  return (
    <div>
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
            <TotalCard total={total} />
          </Col>
        </Row>
      </Container>
    </ div>
  )
}

export default DashBoard