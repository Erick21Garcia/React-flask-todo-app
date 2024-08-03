import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Form, ListGroup, Container, Row, Col } from 'react-bootstrap';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/api/todos')
            .then(response => {
                setTodos(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the todos!', error);
            });
    }, []);

    const handleAddTodo = () => {
        if (newTodo.trim() === '') return;

        axios.post('http://127.0.0.1:5000/api/todos', { content: newTodo })
            .then(response => {
                setTodos([...todos, response.data]);
                setNewTodo('');
            })
            .catch(error => {
                console.error('There was an error adding the todo!', error);
            });
    };

    const handleDeleteTodo = (id) => {
        axios.delete(`http://127.0.0.1:5000/api/todos/${id}`)
            .then(() => {
                setTodos(todos.filter(todo => todo.id !== id));
            })
            .catch(error => {
                console.error('There was an error deleting the todo!', error);
            });
    };

    return (
        <Container className="p-5">
            <Row className="justify-content-md-center">
                <Col md="auto" className="p-3 border rounded shadow-sm">
                    <h1 className="mb-4">To-Do List</h1>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                value={newTodo}
                                onChange={(e) => setNewTodo(e.target.value)}
                                placeholder="Enter a new task"
                                className="mb-3"
                            />
                        </Form.Group>
                        <Button variant="primary" onClick={handleAddTodo} className="mb-3">
                            Add
                        </Button>
                    </Form>
                    <ListGroup className="mt-4">
                        {todos.map(todo => (
                            <ListGroup.Item key={todo.id} className="d-flex justify-content-between align-items-center mb-2">
                                {todo.content}
                                <Button
                                    variant="danger"
                                    onClick={() => handleDeleteTodo(todo.id)}
                                >
                                    Delete
                                </Button>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default TodoList;