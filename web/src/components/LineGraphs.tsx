import React, { useState, useEffect } from 'react'
import { Col, ProgressBar, Row, Button } from 'react-bootstrap'

interface IProps {
  data: number[]
}

const LineGraphs:React.FC<IProps> = ({data}) => {

  return (
    <div style={{marginTop: '5%'}} >
      {data.map((item, index) => {
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
    </div>
  )
}

export default LineGraphs