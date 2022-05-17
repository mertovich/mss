import React, { useState } from 'react'
import { Card, Container, InputGroup, FormControl, Button, Alert } from 'react-bootstrap'
import '../App.css'

interface IProps {
    addData: (day: number, hour: number) => void
}

const DaysCard:React.FC<IProps> = ({addData}) => {
    const [days, setDays] = useState<number>()
    const [hour, setaAount] = useState<number>()
    const [validated, setValidated] = useState<String>('')


    const handleChangeDays = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDays(Number(e.target.value))
    }

    const handleChangehour = (e: React.ChangeEvent<HTMLInputElement>) => {
        setaAount(Number(e.target.value))
    }

    const validateForm = (): boolean => {
        if(days && hour && days > 0 && hour > 0 && hour <= 24 && days <= 30) {
            return true
        }
          return false
     }

    const submitCard = () => {
        if (validateForm()) {
            setValidated('')
            let tmpDay = days as number
            let tmphour = hour as number
            addData(tmpDay - 1, tmphour)
        }
        else {
            setValidated('error')
        }
    }

    return (
        <Container>
            <Card
                bg='cardcustomize'
                text='white'
                className="mb-2">
                <Card.Header>Add</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Text style={{backgroundColor: '#FFFFFF'}} id="inputGroup-sizing-sm">Day (1-30)</InputGroup.Text>
                            <FormControl onChange={handleChangeDays} type='number' aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                        </InputGroup>
                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Text style={{backgroundColor: '#FFFFFF'}} id="inputGroup-sizing-sm">Hour</InputGroup.Text>
                            <FormControl onChange={handleChangehour} type='number' aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
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