import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { LoginContext } from '../../context/auth';
import { Modal, Button, Form } from 'react-bootstrap';
import './login.scss'
const If = props => {
  return props.condition ? props.children : null;
};

// class Login extends React.Component {
//   static contextType = LoginContext;

//   constructor(props) {
//     super(props);
//     this.state = { username: '', password: '' };
//   }
function Login(props){
 const contextType = useContext(LoginContext);
 const [username, setUsername]= useState({});
 const [password, setPassword]= useState({});


 const handleChange = e => {
    // this.setState({ [e.target.name]: e.target.value });
    setUsername({...username,[e.target.name]: e.target.value})
    setPassword({...password,[e.target.name]: e.target.value})

  };

  const handleSubmit = e => {
    e.preventDefault();
    contextType.login(username.username, password.password);
    // e.target.reset()

  };

//   render() {
    return (
      <Modal 
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
          <Modal.Header closeButton style={{borderRadius: '20px'}}>
            <Modal.Title id='contained-modal-title-vcenter'>
                SignIn
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form>
                  <Form.Group controlId="formBasicUsername">
                      <Form.Label>UserName</Form.Label>
                      <Form.Control onChange={handleChange} name='username' type='text' placeholder='Enter your user name'>
                      </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={handleChange} name='password' type="password" placeholder="Password" />
          </Form.Group>
              </Form>
          </Modal.Body>
          <Modal.Footer>
              <Button variant='info' onClick={handleSubmit}>SignIn</Button>
          </Modal.Footer>
        {/* <If condition={contextType.loggedIn}>
          <button onClick={contextType.logout}>Log Out</button>
        </If>

        <If condition={!contextType.loggedIn}>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="UserName"
              name="username"
              onChange={handleChange}
            />
            <input
              placeholder="password"
              name="password"
              onChange={handleChange}
            />
            <button>Login</button>
          </form>
        </If> */}
      </Modal>
    );
//   }
}

export default Login;