import { useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import TodoForm from './form';
import TodoList from './list';
import TopSection from './progress';
import useAjax from '../../hooks/useAjax'
import { useState } from 'react';
// import './todo.scss';

const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';

const ToDo = () => {
  const [list, setList]= useState([])
  const [postItem, deleteItem, putItem, getItems] = useAjax(todoAPI);
  useEffect(
    () =>
    (document.title = `To Do List: ${list.filter((item) => !item.complete).length
      }`)
  );
  useEffect(getItems, [getItems]);
  const firstRequest = () => {
    const fetchData = async () => {
      const data = await getItems();
      setList(data.results);
    };
    fetchData();
  };
  useEffect(firstRequest, []);

  return (
    <Container>
      <Row className="mt-5 mb-4">
        <Col>
          <TopSection list={list} />
        </Col>
      </Row>

      <Row>
        <Col md="5">
          <TodoForm handleSubmit={postItem} getData={firstRequest}/>
        </Col>
        <Col md="6">
          <TodoList
            list={list}
            handleComplete={putItem}
            handleDelete={deleteItem}
            getData={firstRequest}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ToDo;