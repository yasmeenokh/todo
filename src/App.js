
import React from 'react';

import Header from './components/header/Header'
import ToDo from './components/todo/todo-connected';
import PaginationProvider from './context/paginationContext';
import './App.scss'

import LoginContext from './context/auth';
import Acl from './components/todo/Acl';
import Login from './components/todo/logIn';

function App(props) {

  return (
    <>
      <LoginContext>
      <Header />
      <Acl capability=''>
        <div style={{ textAlign: 'center', marginTop: '10%'}}>
        <h2>To List Manager</h2>
          <p>Please SignIn or SignUp First</p>
        </div>
      </Acl>
<PaginationProvider>
      {/* <Login/> */}
      <Acl capability='read'>
      <ToDo />
      </Acl>
</PaginationProvider>
      </LoginContext>
    </>
  );

}
export default App;
