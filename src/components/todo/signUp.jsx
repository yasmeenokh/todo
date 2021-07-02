import React from 'react';
import { LoginContext } from '../../context/auth';
import { If } from 'react-if';
import { useState } from 'react';
import { useContext } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './login.scss'



function SignUp(props){

    const contextType = useContext(LoginContext);

    // const [username, setUsername]= useState({});
    // const [password, setPassword]= useState({});
    // const[email, setEmail]= useState({});
    // const[role, setRole]= useState({});

    // const handleChange= (e)=>{
    //     setUsername({...username,[e.target.name]: e.target.value})
    //     setPassword({...password,[e.target.name]: e.target.value})  
    //     setEmail({...email,[e.target.name]: e.target.value})
    //     setRole({...role,[e.target.name]: e.target.value})
    // }
    // const handleSubmit = (e)=>{
    //     e.preventDefault();
    //     props.onHide();
    //     contextType.signUp(username.username, password.password, role.role, email.email);
    // }
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('user');

  const handleChange = (e) => {
    if (e.target.name === 'username') {
      setUsername(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    } else if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else {
      setRole(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onHide();
    contextType.signUp(username, email, password, role);
  };

    return(
        <Modal {...props}
        size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">SignUp</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="username"
              required
              type="text"
              placeholder="Enter your username"
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="email"
              required
              type="email"
              placeholder="example@email.com"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="password"
              required
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Role</Form.Label>
            <Form.Control onChange={handleChange} name="role" as="select">
              <option value="user">User</option>
              <option value="editor">Editor</option>
              <option value="admin">Admin</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="info" onClick={handleSubmit}>
          SignUp
        </Button>
      </Modal.Footer>
    </Modal>
        // {/* <form onSubmit={handleSubmit}>
        // <h3>Sign Up Form</h3>
        // <input
        //       placeholder="UserName"
        //       name="username"
        //       onChange={handleChange}
        //     />
        //      <input
        //       placeholder="email"
        //       name="email"
        //       onChange={handleChange}
        //     />
        //     <input
        //       placeholder="role"
        //       name="role"
        //       onChange={handleChange}
        //     />
        //     <input type='radio' id='admin' name='admin' value='admin' onChange={handleChange}/>
        //     <label for='admin'>Admin</label>
        //     <input type='radio' id='editor' name='editor' value='editor' onChange={handleChange}/>
        //     <label for='editor'>Editor</label>
        //     <input type='radio' id='user' name='user' value='user' onChange={handleChange}/>
        //     <label for='user'>User</label>

        //     <button type='submit'>Sign Up</button>
        // </form>
        // <If condition={registered=== true}>
        //     You are now registered
        // </If> */}
    
    )
}
export default SignUp;