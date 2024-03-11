import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.css'
function BesicNavbar() {

  return (
    <Navbar expand="lg" className="bg">
      <Container >
        <Navbar.Brand href="#home"><span className='navbrand1'>Nimantran </span><span className='navbrand2'>Studio</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           <Nav.Link href="/"><span className='nav-menu'>Home</span></Nav.Link>
           <NavDropdown  title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item href="/flowers">Wedding</NavDropdown.Item>
              <NavDropdown.Item href="/fruits">
                Birthday
              </NavDropdown.Item>
              <NavDropdown.Item href="/seeds">House-Warming</NavDropdown.Item>
            
              <NavDropdown.Item href="/vegitable">Party</NavDropdown.Item>
            </NavDropdown>


            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="/about">Team members</NavDropdown.Item>
              <NavDropdown.Item href="/nearbystore">
                Nearbystore
              </NavDropdown.Item>
            
            </NavDropdown>



            <Nav.Link href="/login"><span className='login'>Login</span></Nav.Link>
            <Nav.Link href="/signup"><span className='Signup'>Signup</span></Nav.Link>
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );



}
export default BesicNavbar;