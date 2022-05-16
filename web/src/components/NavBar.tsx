import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

interface IPros {
    user: string | null
    handleLogout: () => void
    clearDashBoard: () => void
}

const NavBar: React.FC<IPros> = ({ user,handleLogout, clearDashBoard }) => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container style={{
                        justifyContent: 'center',
                    }} >
                    <Nav>
                        <NavDropdown title={`Welcome ${user}`} id="navbarScrollingDropdown">
                            <NavDropdown.Item onClick={clearDashBoard} href="#action3">Clear DashBoard</NavDropdown.Item>
                            <NavDropdown.Item onClick={handleLogout} href="#action3">Log out</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar