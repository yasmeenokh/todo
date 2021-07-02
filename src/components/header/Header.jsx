import { Navbar, Button } from 'react-bootstrap';
import React , {useState, useContext} from 'react';
import SignUp from '../todo/signUp';
import Login from '../todo/logIn';
import { If, Else, Then } from 'react-if';
import { LoginContext } from '../../context/auth';
import './header.scss'


const NavBar= ()=>{
  const contextType= useContext(LoginContext);
  const [signInForm, setSignInForm]= useState(false);
  const [signUpForm, setSignUpForm]= useState(false);


  return (
    <Navbar className="navbar" bg="primary" variant="dark" expand="true">
      <Navbar.Brand href="#home" className="navHome" 
      style={{color: "white", marginLeft: '45%'}}
      >Home</Navbar.Brand>
      <If condition={contextType.loggedIn}>
        <Then>
          <Navbar.Brand style={{marginRight: '10%'}}>
            <Button variant='danger' onClick={contextType.logout}>
              LogOut
            </Button>
          </Navbar.Brand>
        </Then>
        <Else>
          <Navbar.Brand className="d-flex justify-content-between">
            <Button
              className="mr-3"
              variant="outline-light"
              onClick={() => setSignInForm(true)}
            >
              SignIn
            </Button>
            <Button
              className="mr-3"
              variant="outline-light"
              onClick={() => setSignUpForm(true)}
            >
              SignUp
            </Button>
            </Navbar.Brand>
        </Else>
      </If>
      <SignUp show={signUpForm} onHide={()=>setSignUpForm(false) }/>
      <Login show={signInForm}onHide={()=>setSignInForm(false) }/>
    </Navbar>
  );
};

export default NavBar;