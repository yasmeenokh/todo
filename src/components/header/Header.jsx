import { Navbar } from 'react-bootstrap';

function NavBar(){
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Home</Navbar.Brand>
    </Navbar>
  );
};

export default NavBar;