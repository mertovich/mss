import React, {useState} from 'react'
import { Container } from 'react-bootstrap'
import { Form, Button } from 'react-bootstrap'

interface IProps {
    handleLogin: (user: string) => void
}

const Login: React.FC<IProps> = ({ handleLogin }) => {
    const [user, setUser] = useState<string>('')
    return (
        <Container>
            <div style={{
                alignItems: 'center',
            }}>
                <Container style={{
                    textAlign: 'center',
                    marginTop: '20%',
                }}>
                    <h1>Login</h1>
                    <Form style={{
                        paddingLeft: '20%',
                        paddingRight: '20%',
                    }} >
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Control onChange={(e) => setUser(e.target.value)} type="name" placeholder="Enter name" />
                        </Form.Group>
                        <Button onClick={() => handleLogin(user)} variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
        </Container>
    )
}

export default Login