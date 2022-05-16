import React, { useState } from 'react'
import { Card, Container, InputGroup, FormControl, Button, Alert } from 'react-bootstrap'

interface IProps {
    addData: (day: number, amount: number) => void
}

const DaysCard:React.FC<IProps> = ({addData}) => {
    const [days, setDays] = useState<number>()
    const [amount, setaAount] = useState<number>()
    const [validated, setValidated] = useState<String>('')


    const handleChangeDays = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDays(Number(e.target.value))
    }

    const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        setaAount(Number(e.target.value))
    }

    const validateForm = (): boolean => {
        if(days && amount && days > 0 && amount >= 0 && days <= 31) {
            return true
        }
          return false
     }

    const submitCard = () => {
        if (validateForm()) {
            setValidated('')
            let tmpDay = days as number
            let tmpAmount = amount as number
            addData(tmpDay - 1, tmpAmount)
        }
        else {
            setValidated('error')
        }
    }

    return (
        <Container>
            <Card
                bg='primary'
                text='white'
                className="mb-2">
                <Card.Header>Add</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-sm">Day (1-31)</InputGroup.Text>
                            <FormControl onChange={handleChangeDays} type='number' aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                        </InputGroup>
                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-sm">Amount</InputGroup.Text>
                            <FormControl onChange={handleChangeAmount} type='number' aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                        </InputGroup>
                    </Card.Text>
                </Card.Body>
                {validated === '' ? null : <Alert key='danger' variant='danger'>Incorrect login please try again after checking.</Alert> }
                <Button onClick={() => submitCard()} variant="light">save</Button>
            </Card>
        </Container >
    )
}

export default DaysCard