import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import axios from 'axios';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [todos1, setTodos1] = useState([]);
  const [newTodo1, setNewTodo1] = useState('');
  const [todos2, setTodos2] = useState([]);
  const [newTodo2, setNewTodo2] = useState('');


  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
  
    axios.get('http://localhost:3001/posts')
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error('Error fetching todos:', error);
      });
  };

  const addTodo = () => {
    const newTodoObj = {
      title: newTodo,
      completed: false,
    };

    axios.post('http://localhost:3001/posts', newTodoObj)
      .then(() => {
        fetchTodos(); 
        setNewTodo('');
      })
      .catch((error) => {
        console.error('Error adding todo:', error);
      });
  };

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:3001/posts/${id}`)
      .then(() => {
        fetchTodos();
      })
      .catch((error) => {
        console.error('Error deleting todo:', error);
      });
  };

  const updateTodo = (id, updatedData) => {
   
    axios.put(`http://localhost:3001/posts/${id}`, updatedData)
      .then(() => {
        fetchTodos();
      })
      .catch((error) => {
        console.error('Error updating todo:', error);
      });
  };

  return (
    <div>
      <Box p={3}>
        <h1>PLACE ORDER</h1>
        <TextField
          label="Enter Address"
          variant="outlined"
          fullWidth
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={addTodo}
          disabled={!newTodo}
        >
          YOUR ADDRESS
        </Button> <br /><br />
        <List>
          {todos.map((todo) => (
            <ListItem key={todo.id}>
              <ListItemText primary={todo.title} />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="edit1"
                  onClick={() => {
                    const updatedTitle = prompt('Edit1 Todo:', todo.title);
                    if (updatedTitle !== null) {
                      const updatedData = { title: updatedTitle };
                      updateTodo(todo.id, updatedData);
                    }
                  }}
                >
                  <Edit />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="delete1"
                  onClick={() => deleteTodo(todo.id)}
                >
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        <TextField
          label="Add Dishes"
          variant="outlined"
          fullWidth
          value={newTodo1}
          onChange={(e) => setNewTodo1(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={addTodo}
          disabled={!newTodo}
        >
          ADD TO CART
        </Button><br /><br />
        <List>
          {todos.map((todo) => (
            <ListItem key={todo.id}>
              <ListItemText primary={todo.title} />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="edit"
                  onClick={() => {
                    const updatedTitle = prompt('Edit Todo:', todo.title);
                    if (updatedTitle !== null) {
                      const updatedData = { title: updatedTitle };
                      updateTodo(todo.id, updatedData);
                    }
                  }}
                >
                  <Edit />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => deleteTodo(todo.id)}
                >
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        <TextField
          label="Enter Phone"
          variant="outlined"
          fullWidth
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={addTodo}
          disabled={!newTodo}
        >
          MOBILE NUMBER
        </Button>
        <br /><br /><br /><br /><br /><br /><br />
        
        <Button
          variant="contained"
          color="primary"
          onClick={addTodo}
          disabled={!newTodo}
        >
          SUBMIT
        </Button>
        
        <List>
          {todos.map((todo) => (
            <ListItem key={todo.id}>
              <ListItemText primary={todo.title} />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="edit"
                  onClick={() => {
                    const updatedTitle = prompt('Edit Todo:', todo.title);
                    if (updatedTitle !== null) {
                      const updatedData = { title: updatedTitle };
                      updateTodo(todo.id, updatedData);
                    }
                  }}
                >
                  <Edit />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => deleteTodo(todo.id)}
                >
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}

export default TodoList;