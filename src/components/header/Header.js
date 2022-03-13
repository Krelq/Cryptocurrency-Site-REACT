import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                <Link to="/" style={{ textDecoration: 'none' }}><Navbar.Brand>
                        <img
                            alt=""
                            src="/logo192.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Cryptocurrency
                    </Navbar.Brand></Link>
                    <Nav>
                        <Link to="/calculator" className='nav-link'>Crypto calculator</Link>
                        <Link to="/" className='nav-link'>Crypto prices</Link>
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}