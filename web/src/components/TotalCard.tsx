import React, {useState} from 'react'
import { Container, Card } from 'react-bootstrap'

interface IProps {
    total: number
}

const TotalCard:React.FC<IProps> = ({total}) => {


    return (
        <div>
            <Container>
                <Card
                    bg='primary'
                    text='white'
                    className="mb-2">
                    <Card.Header>Total</Card.Header>
                    <Card.Body>
                        <Card.Text>
                        <Card.Header>Total Money  {total}</Card.Header>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default TotalCard