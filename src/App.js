
import React from 'react';

import Header from './components/header/Header'
import ToDo from './components/todo/todo-connected';
import PaginationProvider from './context/paginationContext';
import './App.scss'


function App() {

  return (
    <>
      <Header />
<PaginationProvider>
      <ToDo />
</PaginationProvider>
    </>
  );

}
export default App;
