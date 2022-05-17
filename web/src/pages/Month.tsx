import React, { useEffect, useRef } from 'react'
import { Container, Table } from 'react-bootstrap'
import {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';
import {Button} from 'react-bootstrap'

interface IProps {
    data: number[]
    total: number
}

const Month: React.FC<IProps> = ({ data, total }) => {
    const [totalMoney, setTotalMoney] = React.useState<number>()

    useEffect(() => {
        setTotalMoney(localStorage.getItem('totalAmount') ? Number(localStorage.getItem('totalAmount')) : 0)
    }, [])


    const printDocument = () => {
        const input = document.getElementById('table') as HTMLInputElement
        html2canvas(input).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            pdf.addImage(imgData, 'PNG', 0, 0, 211, 298);
            pdf.save('table.pdf');
        });
    }

    return (
        <Container style={{
            marginLeft: '10%',
            marginTop: '2%',
        }}  >
            <Button onClick={() => printDocument()} variant="success">Download table as pdf</Button>
            <Table id='table' striped bordered hover>
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Hour</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((day, index) => {
                        return (
                            <tr key={index + 1}>
                                <td>{index + 1}</td>
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