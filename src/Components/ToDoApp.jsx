import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, editTodo, toggleComplete } from '../features/todoSlice';
import { Button, Form, ListGroup } from 'react-bootstrap';

function ToDoApp() {
  const [text, setText] = useState('');
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  const handleEdit = (id, currentText) => {
    setEditId(id);
    setEditText(currentText);
  };

  const handleUpdateTodo = () => {
    if (editText.trim()) {
      dispatch(editTodo({ id: editId, newText: editText }));
      setEditId(null);
      setEditText('');
    }
  };

  return (
    <div className="container mt-4 w-25">
      <h1 className='head1 text-center f-5 fw-bolder text-danger mb-5'>To do List</h1>
      <Form>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Enter todo"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Form.Group>
        <div className="d-flex justify-content-center ">
        <Button className="mt-3 btn-secondary" onClick={handleAddTodo}>Add</Button>
        </div>
      </Form>

      <ListGroup className="mt-4">
        {todos.map((todo) => (
          <ListGroup.Item
            key={todo.id}
            className="d-flex justify-content-between align-items-center"
          >
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <div>
              <Button
                variant="success"
                onClick={() => dispatch(toggleComplete(todo.id))}
                className="me-2"
              >
                {todo.completed ? 'Undo' : 'Complete'}
              </Button>
              <Button
                variant="warning"
                className="me-2"
                onClick={() => handleEdit(todo.id, todo.text)}
              >
                Edit
              </Button>
              <Button variant="danger" onClick={() => dispatch(deleteTodo(todo.id))}>
                Delete
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>

      {editId && (
        <div className="mt-4">
          <Form>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Edit todo"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            </Form.Group>
            <Button className="mt-2" onClick={handleUpdateTodo}>Update</Button>
          </Form>
        </div>
      )}
    </div>
  );
}

export default ToDoApp;
