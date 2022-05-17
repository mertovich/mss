import React, { useState, useEffect } from 'react'
import { Col, ProgressBar, Row, Button, Container } from 'react-bootstrap'
import '../App.css'

interface IProps {
  data: number[]
}

const LineGraphs: React.FC<IProps> = ({ data }) => {
  const [pageIndex, setPageIndex] = useState<number>(1)
  const [pageData, setPageData] = useState<number[]>([])

  useEffect(() => {
    setPageData(data.slice(0, pageIndex * 10))
  }
  , [data, pageIndex])

  const handlePageChange = (index:number) => {
    switch (index) {
      case 1:
        setPageIndex(1)
        setPageData(data.slice(0, pageIndex * 10) as number[])
        break;
      case 2:
        setPageIndex(2)
        setPageData(data.slice(10, pageIndex * 10) as number[])
        break;
      case 3:
        setPageIndex(3)
        setPageData(data.slice(20, pageIndex * 10) as number[])
        break;
    }
  }

  return (
    <div style={{ marginTop: '5%' }} >
      {pageData.map((item, index) => {
        return (
          <Row>
            <Col xs={1} >
              <p>{index + 1}</p>
            </Col>
            <Col>
              <ProgressBar variant='progressBarcustomize' key={index + 1} now={item as number} label={`${item}`} />
            </Col>
          </Row>
        )
      }
      )}
      <Container>
        <Button  style={{margin: '1%',backgroundColor: '#FFE69A',borderColor: '#FFE69A'}} onClick={() => handlePageChange(1)}>1</Button>
        <Button  style={{margin: '1%',backgroundColor: '#FFE69A',borderColor: '#FFE69A'}} onClick={() => handlePageChange(2)}>2</Button>
        <Button  style={{margin: '1%',backgroundColor: '#FFE69A',borderColor: '#FFE69A'}} onClick={() => handlePageChange(3)}>3</Button>
      </Container>
    </div>
  )
}

export default LineGraphs