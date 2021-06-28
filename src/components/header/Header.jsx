import { Navbar } from 'react-bootstrap';
import './header.scss'
function NavBar(){
  return (
    <Navbar className="navbar">
      <Navbar.Brand href="#home" className="navHome">Home</Navbar.Brand>
    </Navbar>
  );
};

export default NavBar;