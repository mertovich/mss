import React, { useEffect } from 'react'
import { Container, Table } from 'react-bootstrap'

interface IProps {
    data: number[]
    total: number
}

const Month: React.FC<IProps> = ({ data, total }) => {
    const [totalMoney, setTotalMoney] = React.useState<number>()

    useEffect(() => {
        setTotalMoney(localStorage.getItem('totalAmount') ? Number(localStorage.getItem('totalAmount')) : 0)
    }, [])
    return (
        <Container style={{
            marginLeft: '10%',
            marginTop: '2%',
            fontSize: '0.8rem',
        }}  >
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Hour</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((day, index) => {
                        return (
                            <tr key={index+1}>
                                <td>{index+1}</td>
                                <td>{day}</td>
                            </tr>
                        )
                    }
                    )}
                    <tr>
                        <td>TOTAL PAY</td>
                        <td>{totalMoney}</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}

export default Month