import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../manulogo.jpg'
import Carousel from 'react-bootstrap/Carousel';

const PrimaryNav = () => {
  return (
  <>
    <Navbar bg="info" expand="lg">
      <Container>
        <Navbar.Brand><img
              src={Logo}
              width="100"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="events">Events</Nav.Link>
            <Nav.Link href="#link">Gallery</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>





<div>
  
    <Carousel >
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://i0.wp.com/www.internationalbrandequity.com/wp-content/uploads/2022/04/event-management-guide-1.jpg?resize=768%2C512&ssl=1"
          style={{height:'35rem'}}
          alt="First slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/prepared-wedding-hall_8353-9873.jpg?w=996&t=st=1684386328~exp=1684386928~hmac=41f317bc5e7fc6abe0dd5f769b30c163bb9d723e4eee2770658dff4f485883b1"
          style={{height:'35rem'}}
          alt="Second slide"
        />

        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/restaurant-hall-with-tables-decorated-with-tall-vases-with-roses_1304-4823.jpg?w=996&t=st=1684387141~exp=1684387741~hmac=984d8cc345501916b08e7d9141bd9711f284fb14a7c06c7716c4d44adee1f9b0"
          style={{height:'35rem'}}
          alt="Third slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  );
}


 


  


export default PrimaryNav;