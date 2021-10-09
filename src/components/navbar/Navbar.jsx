import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../../sass/components/_navbar.scss';

const BaseNavbar = ({ }) => {

    return (
        <Navbar expand="lg">
            <Container>
                <NavLink to="/">
                    <Navbar.Brand as="h1">Shahry</Navbar.Brand>
                </NavLink>
            </Container>
        </Navbar>
    )
}

export default BaseNavbar;
