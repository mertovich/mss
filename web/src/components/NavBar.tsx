import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

interface IProps {
    user: string | null
    handleLogout: () => void
    clearDashBoard?: () => void
}

const NavBar: React.FC<IProps> = ({ user, handleLogout, clearDashBoard }) => {
    return (
        <div>
            <Navbar style={{ backgroundColor: '#FFE69A' }} variant="light">
                <Container style={{
                    justifyContent: 'center',
                }} >
                    <Nav>
                        <NavDropdown title={`Welcome ${user}`} id="navbarScrollingDropdown">
                            <div className='text-center'>
                                <Link style={{ textDecoration: 'none', color: 'black' }} to='month'>Table</Link>
                            </div>
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