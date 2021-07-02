import React from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import superagent from 'superagent';
import { useState } from 'react';
import { useEffect } from 'react';
dotenv.config();

const API = process.env.REACT_APP_API;
const SECRET = 'supersecret'

export const LoginContext = React.createContext();

// class LoginProvider extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loggedIn: false,
//       token: null,
//       login: this.login,
//       logout: this.logout,
//       user: {},
//     };
//   }
function LoginProvider(props){

  const [loggedIn, setLoggedIn]= useState(false);
  const [user, setUser]= useState({});


  useEffect(()=>{
    const token = cookie.load('auth');
    validateToken(token);
},[]);

//   login = (username, password) => {
//     fetch(`${API}/signin`, {
//       method: 'post',
//       mode: 'cors',
//       cache: 'no-cache',
//       headers: {
//         'Authorization': `Basic ${btoa(`${username}:${password}`)}`,
//       },
//     })
//       .then(response => response.text())
//       .then(token => this.validateToken(token))
//       .catch(console.error);
//   }
const login = async(username, password)=>{
    console.log(username,password);
    try{
    
        const response = await superagent.post(`${API}/signin`)
            .set('authorization', `Basic ${btoa(`${username}:${password}`)}`);
        
        validateToken(response.body.token);
    } catch(error){
        console.log('Failed to signIn', error.message)
    }
}
 const validateToken = token => {
    try {
      let user = jwt.verify(token, SECRET);
      console.log('all good');
      console.table(user)

      setLoginState(true, token, user);
    }
    catch (e) {
        console.log('Token Validation Error', e);
      setLoginState(false, null, {});
    }
  };
 const logout = () => {
    setLoginState(false, null, {});
  };
  const signUp = async(username, email, password,role)=>{
    console.log('RESPONSE===', username, email, password,role)
        try{
          console.log('hhhhhhh')
        
        const response = await superagent.post(`${API}/signup`, { username, email, password, role });
        validateToken(response.body.token);
        console.log('response.body.token', response.body.token)

        }catch(error){
            console.log('SignUp Error', error.message);
        }
  }

 const setLoginState = (loggedIn, token, user) => {
    cookie.save('auth', token);
    // this.setState({ token, loggedIn, user });
    setUser(user);
    setLoggedIn(loggedIn);
  };
const state = {login, logout, signUp, loggedIn, user}
//   render() {
    return (
      <LoginContext.Provider value={state}>
        {props.children}
      </LoginContext.Provider>
    );
//   }
}

export default LoginProvider;