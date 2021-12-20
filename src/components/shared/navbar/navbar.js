import React from 'react';
import { Navbar, Container, Nav,NavLink,NavDropdown } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

export const Topnavbar = () => {
    const navigate = useNavigate(); //gives navigate prop which is used to navigate to other pages

    let handleLogout=()=>{
        localStorage.clear();
        navigate('/login');
    }

    let handleLogin=()=>{
        navigate('/login')
    }


    let token = JSON.parse(localStorage.getItem('token'));
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">STOCK MANAGEMENT SYSTEM</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink  href="#features">Home</NavLink>
                            <NavLink href="#pricing">Contact</NavLink>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                           { token ?
                           <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
                           :
                           <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                           }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
