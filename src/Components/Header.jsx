import React from 'react'
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';




function Header() {
  return (
    <div  className=''>




        <Navbar className="bg-body-black ">
        <Container>
          <Navbar.Brand href="#home">
          <i class="fa-solid fa-user fa-2x p-2"></i>
<span style={{fontSize:"50px",fontFamily:'cursive'}}>   USER MANAGEMENT PORTAL </span>
          </Navbar.Brand>
{/* 
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav> */}
        </Container>
      </Navbar>
    </div>
  )
}

export default Header