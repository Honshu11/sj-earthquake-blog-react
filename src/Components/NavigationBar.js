import React from 'react';
import {Navbar} from 'react-bootstrap';

function NavigationBar() {
    return (
        <div className='Navbar-container'>
            <Navbar bg="dark" variant="bg" expand="lg">
                <Navbar.Brand href="#">
                    <img 
                    src='./Images/san-jose-quakes-logo.png'
                    height="40px"
                    width="40px"
                    alt=''
                    />
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}

export default NavigationBar;

