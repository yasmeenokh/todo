import React from 'react';
import Badge from 'react-bootstrap/Badge'
import {Row, Col } from 'react-bootstrap';

import { Form, Button, Card } from 'react-bootstrap';
import {PaginationContext} from '../../context/paginationContext' 
import './todo.scss';
import { useContext } from 'react';
import { useState } from 'react';
import {useEffect} from 'react'
import Pagination from 'react-bootstrap/Pagination'
import { LoginContext } from '../../context/auth';

function TodoList(props) {
  const contextType= useContext(LoginContext);
  const context = useContext(PaginationContext);
  const [currentPage, setCurrent]= useState(context.setStartCount);
  const numberOfTasks = context.count;
  const [list, setList]= useState([]);

  useEffect(() => {
    setList(props.list);
  }, [props.list]);  

  const pageNumber = list.length/numberOfTasks +1;
  const lastItem = currentPage * numberOfTasks;
  const firstItem = lastItem - numberOfTasks;
  const currentList = list.slice(firstItem, lastItem);
  const nextPage = (i)=> setCurrent(i);

  const pageNumbers = [];
  let activePage = currentPage;

  for(let i =1; i < pageNumber; i++){
    pageNumbers.push(
      <Pagination.Item key={i}
      className={i === activePage ? 'active': ''}
      onClick={()=> nextPage(i)}>
        {i}
      </Pagination.Item>
    )
  }

  return (

    // <>    


    <React.Fragment>
      {/* {props.list.map((item) => (
       
        <Card key={item._id} className="listCard">
          
            <Card.Header>
<Badge pill variant={item.complete ? 'success' : 'warning'}>
            </Badge>{' '}
              {item.complete ? 'Complete' : 'Pending...'}
          <Button 
          variant='danger'
          // key={item._id}
          style={{ maxWidth: '4%', height: '30px', paddingBottom: '6%', paddingRight: '4%'}}
          onClick={() => props.handleDelete(item)}>X</Button>

            </Card.Header>
            <Card.Body onClick={() => props.handleComplete(item)} style={{ cursor: 'pointer' }}>
            <strong className="mr-auto ml-4">{item.assignee}</strong>
            <h3 className={`ml-3 ${item.complete ? 'text-muted text-decoration-line-through' : ''}`}>{item.text}</h3>
            <br />
            <p className="float-right" style={{ fontSize: '85%' }}>
              Difficulty: {item.difficulty}
            </p>
            <br />
            </Card.Body>
        
          </Card> */}
          <Row>
            <Col style={{paddingRight :'1px'}}>

<Pagination>
            <Pagination.Prev
            disabled={activePage === 1 ? true : false}
            onClick={() => {
              setCurrent(currentPage - 1);
            }}
          />
          {pageNumbers}
          <Pagination.Next
            disabled={activePage > pageNumber - 1 ? true : false}
            onClick={() => {
              setCurrent(currentPage + 1);
            }}
          />
        </Pagination>
            </Col>
            <Col>
            <Form style={{width: '120px'}} >
              <Form.Control as='select'
              onChange={(e)=> context.setCount(e.target.value)}>
                <option value='5'>#PerPage</option>
                <option value='3'>3</option>
                <option value={list.length}>All</option>
              </Form.Control>
            </Form>
            </Col>
            <Col>
            <Form style={{width: '105px'}} >
              <Form.Control as= 'select'
              onChange={(e=>{
                if(e.target.value === 'all') setList(props.list);
                else{
                  let completed = list.filter(
                    (item)=> item.complete === Boolean (e.target.value)
                  ); setList(completed);
                  setCurrent(1);
                }
              })}>
                <option value='all'>Filter by</option>
                <option value={1}>Completed</option>
                <option value=''>Pending</option>
              </Form.Control>
            </Form>
            </Col>
            <Col>
            <Form style={{width: '75px'}}>
              <Form.Control as='select'
              onChange={(e)=>{
                context.setSort(e.target.value);
                if(e.target.value === 'all') setList(props.list)
                else if(e.target.value === 'easy'){
                  setList(list.sort((a,b)=> b.difficulty - a.difficulty));
                  setCurrent(1);
                } else if(e.target.value === 'hard'){
                  setList(list.sort((a,b)=> a.difficulty - b.difficulty));
                  setCurrent(1);
                } else if(e.target.value === 'complete'){
                  setList(list.sort((a,b)=> a.complete === b.complete ? 0 : a.complete ? 1 : -1));
                  setCurrent(1);
              }}}>
                <option value='all'>Sort by</option>
              <option value='easy'>Difficulty Descending</option>
              <option value='hard'>Difficulty Ascending</option>
              </Form.Control>
            </Form>
            </Col>
          </Row>
          {currentList.map((item) => (
       
        <Card key={item._id} className="listCard">
          
            <Card.Header>
              
{/* <Badge pill variant={item.complete ? 'success' : 'warning'}>
              {item.complete ? 'Complete' : 'Pending...'}
            </Badge>{' '} */}
            <Button variant={item.complete ? 'success' : 'warning'} style={{borderRadius: '35px', height: '10px', cursor: 'auto', paddingBottom: '6%' }}>
              {item.complete ? 'Complete' : 'Pending...'}
            </Button>
          <Button 
          variant='danger'
          // key={item._id}
          style={{ maxWidth: '4%', height: '30px', paddingBottom: '6%', paddingRight: '4%'}}
          onClick={async() => {
            if(contextType.user.capabilities.includes('delete')){
              await props.handleDelete(item) 
              await props.getData();
            }
          }}>
            X</Button>

            </Card.Header>
            <Card.Body onClick={async() => {
              if(contextType.user.capabilities.includes('update')){
                await props.handleComplete(item);
                         await props.getData();
              }
}} style={{ cursor: 'pointer' }}>

            <strong className="mr-auto ml-4">{item.assignee}</strong>
            <h3 className={`ml-3 ${item.complete ? 'text-muted text-decoration-line-through' : ''}`}>{item.text}</h3>
            <br />
            <p className="float-right" style={{ fontSize: '85%' }}>
              Difficulty: {item.difficulty}
            </p>
            <br />
            </Card.Body>
        
          </Card>
         ))} 
        </React.Fragment>
    // </>
  );

};
export default TodoList;