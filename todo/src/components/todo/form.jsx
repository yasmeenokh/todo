import React from 'react';
import{useState} from 'react';
import {Form, Button, Card} from 'react-bootstrap';

function ToDoForm(props){
    const [item, setItem] = useState({});

    const handleInputChange = (e)=>{
        setItem({...item, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        e.target.reset();
        props.handleSubmit(item);
        const newItem = {};
        setItem({newItem})
    }
    return(
        <>
        <Card.Header as='h4'>Add New List Item</Card.Header>
        <Card.Body>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>TO DO</Form.Label>
                    <Form.Control type='text' name='text' placeholder='Add a new item to the list' onChange={handleInputChange}> 
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Difficulty Meter</Form.Label>
                    <Form.Control defaultValue='1' type='range' min='1' max='5' name='Difficulty' onChange={handleInputChange}>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Assigned To</Form.Label>
                    <Form.Control type='text' name='assignee' placeholder='Assigned To' onChange={handleInputChange}>
                    </Form.Control>
                </Form.Group>
                <Button variant='primary' type='submit'>ADD ITEM</Button>
            </Form>
        </Card.Body>
        </>
    )
}

export default ToDoForm;