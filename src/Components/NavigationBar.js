import { NavbarText } from 'bootstrap-react';
import React from 'react';
import {Navbar} from 'react-bootstrap';

function NavigationBar() {
    return (
        <div className='Navbar-container'>
            <Navbar bg="dark" variant="bg">
                <Navbar.Brand href="#">
                    <img 
                    src='./Images/san-jose-quakes-logo.png'
                    alt='San Jose Quakes'
                    />
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}

export default NavigationBar

