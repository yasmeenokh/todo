import { ListGroup } from "react-bootstrap";
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import {Button} from 'react-bootstrap';
import './todo.scss'


function TodoList(props){
    return(
        <>
        <ListGroup className="listGroup">
           {props.list.map((item)=>(
               <>
                     <ButtonGroup size="1g" className="mb-2">

               <ListGroup.Item action 
               className={`complete-${item.complete.toString()}`}
               key={item._id} 
               variant={item.complete ? `success` : `danger`}
               onClick={() => props.handleComplete(item._id)}
               >
                  {item.text}
                  </ListGroup.Item>
               <Button onClick={()=> props.handleDelete(item._id)}
               className="delete"
               key={item._id} 
               variant= 'danger'
               >DELETE</Button>
                 </ButtonGroup>

               </>

           ))}
        </ListGroup>
        </>
    )
}

export default TodoList;