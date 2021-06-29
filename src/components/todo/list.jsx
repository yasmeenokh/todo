import { Toast } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge'
import { Form, Button, Card } from 'react-bootstrap';
import './todo.scss';


function TodoList(props) {
  return (

    <>
        
      {props.list.map((item) => (
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
          </Card>
  //       <Toast
        
  //         key={item._id}
  //         style={{ maxWidth: '100%'}}
  //         onClose={() => props.handleDelete(item)}
  //       >
  //         <Toast.Header>
  //           <div>
  //           {/* <Badge pill variant="primary">
  //   Primary
  // </Badge>{' '} */}
  //           <Badge pill variant={item.complete ? 'success' : 'warning'}>
  //             {item.complete ? 'Complete' : 'Pending...'}
  //           </Badge>{' '}
  //           </div>
  //           <strong className="mr-auto ml-4">{item.assignee}</strong>
  //         </Toast.Header>
  //         <Toast.Body onClick={() => props.handleComplete(item)} style={{ cursor: 'pointer' }}>
  //           <h3 className={`ml-3 ${item.complete ? 'text-muted text-decoration-line-through' : ''}`}>{item.text}</h3>
  //           <br />
  //           <p className="float-right" style={{ fontSize: '85%' }}>
  //             Difficulty: {item.difficulty}
  //           </p>
  //           <br />
  //         </Toast.Body>
  //       </Toast>
      ))}
    </>
  );

};
export default TodoList;