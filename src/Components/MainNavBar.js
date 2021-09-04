import { Navbar , Container } from 'bootstrap-react'
import React from 'react'

function MainNavBar() {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                <Navbar.Brand href="#home">BrandIcon</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default MainNavBar
