import { Navbar } from 'react-bootstrap';
import './header.scss'
function NavBar(){
  return (
    <Navbar className="navbar">
      <Navbar.Brand href="#home" className="navHome" 
      style={{color: "white", alignItems: 'center'}}
      >Home</Navbar.Brand>
    </Navbar>
  );
};

export default NavBar;