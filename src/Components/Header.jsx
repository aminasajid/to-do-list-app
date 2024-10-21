import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function Header() {
  return (
    <div>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" className='text-info'>
            <img
              alt=""
              src="https://th.bing.com/th/id/OIP.50SUC-Bl88A88lWmGVHywAHaHa?w=512&h=512&rs=1&pid=ImgDetMain"
              width="30"
              height="30"
              className="d-inline-block align-top "
            />{' '}
            TO DO
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
