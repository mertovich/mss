import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

interface IProps {
    user: string | null
    handleLogout: () => void
    clearDashBoard: () => void
}

const NavBar: React.FC<IProps> = ({ user,handleLogout, clearDashBoard }) => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container style={{
                        justifyContent: 'center',
                    }} >
                    <Nav>
                        <NavDropdown title={`Welcome ${user}`} id="navbarScrollingDropdown">
                            <NavDropdown.Item onClick={clearDashBoard} >Clear DashBoard</NavDropdown.Item>
                            <NavDropdown.Item onClick={handleLogout} >Log out</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar