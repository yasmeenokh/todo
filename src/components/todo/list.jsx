import { ListGroup } from "react-bootstrap";

function TodoList(props){
    return(
        <ListGroup>
           {props.list.map((item)=>(
               
               <ListGroup.Item action 
               key={item._id} 
               variant={item.complete ? `success` : `danger`}
               onClick={() => props.handleComplete(item._id)}
             >
                  {item.text}
                  </ListGroup.Item>
           ))}
        </ListGroup>
    )
}

export default TodoList;