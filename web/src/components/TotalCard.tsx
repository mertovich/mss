import React, { useState } from 'react'
import { Container, Card, InputGroup, FormControl, Alert, Button,} from 'react-bootstrap'
import '../App.css'

interface IProps {
    total: number
}

const TotalCard: React.FC<IProps> = ({ total }) => {
    const [validated, setValidated] = useState<String>('')
    const [amount, setAmount] = useState<number>(0)
    const [totalAmount, setTotalAmount] = useState<number>()

    const submitCard = () => {
        if (validateForm()) {
            setValidated('')
            totalAmountCalculator()
        }
        else {
            setValidated('error')
        }
    }

    const totalAmountCalculator = () => {
        setTotalAmount(amount * total)
    }

    const amountHendler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(Number(e.target.value))
    }

    const validateForm = (): boolean => {
        if (amount > 0) {
            return true
        }
        return false
    }

    const saveTotalAmount = () => {
        localStorage.setItem('totalAmount', JSON.stringify(totalAmount))
    }

    return (
        <div>
            <Container>
                <Card
                    bg='cardcustomize'
                    text='white'
                    className="mb-2">
                    <Card.Header>Total</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <Card.Header>Total Money {totalAmount}</Card.Header>
                        </Card.Text>
                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Text style={{ backgroundColor: '#FFFFFF' }} id="inputGroup-sizing-sm">Hourly wage</InputGroup.Text>
                            <FormControl onChange={amountHendler} type='number' aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                        </InputGroup>
                    </Card.Body>
                    {validated === '' ? null : <Alert key='danger' variant='danger'>Incorrect login please try again after checking.</Alert>}
                    <Button style={{margin: '1%'}} onClick={() => submitCard()} variant="light">calculate</Button>
                    <Button style={{margin: '1%'}} onClick={() => saveTotalAmount()} variant="light">save</Button>
                </Card>
            </Container>
        </div>
    )
}

export default TotalCard