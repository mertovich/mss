import React, { useState, useEffect } from 'react'
import { Col, ProgressBar, Row, Button } from 'react-bootstrap'

type Props = {}

const LineGraphs = (props: Props) => {
  const [pageIndex, setPageIndex] = useState(1)
  const [tmpData, setTmpData] = useState<Number[] | []>([1]);

  const data = [
    1,2,3,4,5,6,7,8,9,10,
    11,12,13,14,15,16,17,18,19,20,
    21,22,23,24,25,26,27,28,29,30,
  ]

  useEffect(() => {
    handlePageIndex(pageIndex)
  }, [])


  const handlePageIndex = (index: number) => {
    setPageIndex(index)
    switch (index) {
      case 1:
        const tmpData1 = data.splice(0, 10)
        setTmpData(tmpData1)
        break
        case 2:
          const tmpData2 = data.splice(10, 10)
          setTmpData(tmpData2)
          break
      case 3:
        const tmpData3 = data.splice(20, 30)
        setTmpData(tmpData3)
        break
    }
  }


  return (
    <div style={{marginTop: '5%'}} >
      {tmpData.map((item, index) => {
        return (
          <Row>
            <Col xs={1} >
              <p>{index + 1}</p>
            </Col>
            <Col>
              <ProgressBar key={index + 1} now={item as number} label={`${item}`} />
            </Col>
          </Row>
        )
      }
      )}
      <Button style={{marginLeft: '1%', marginRight: '1%'}} onClick={() => handlePageIndex(1)} variant="info">1</Button>
      <Button style={{marginLeft: '1%', marginRight: '1%'}} onClick={() => handlePageIndex(2)} variant="info">2</Button>
      <Button style={{marginLeft: '1%', marginRight: '1%'}} onClick={() => handlePageIndex(3)} variant="info">3</Button>
    </div>
  )
}

export default LineGraphs