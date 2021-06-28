import { Toast, Badge } from 'react-bootstrap';


function TodoList(props) {
  return (

    <>
      {props.list.map((item) => (
        <Toast
          key={item._id}
          style={{ maxWidth: '100%' }}
          onClose={() => props.handleDelete(item)}
        >
          <Toast.Header>
            <Badge pill variant={item.complete ? 'success' : 'warning'}>
              {item.complete ? 'Complete' : 'Pending...'}
            </Badge>
            <strong className="mr-auto ml-4">{item.assignee}</strong>
          </Toast.Header>
          <Toast.Body onClick={() => props.handleComplete(item)} style={{ cursor: 'pointer' }}>
            <h3 className={`ml-3 ${item.complete ? 'text-muted text-decoration-line-through' : ''}`}>{item.text}</h3>
            <br />
            <p className="float-right" style={{ fontSize: '85%' }}>
              Difficulty: {item.difficulty}
            </p>
            <br />
          </Toast.Body>
        </Toast>
      ))}
    </>
  );

};
export default TodoList;