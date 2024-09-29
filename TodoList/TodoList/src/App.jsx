import { Fragment, useState } from "react";
import Todo from "./Components/Todo";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

function App() {
  const [todos, setTodos] = useState([]);
  const [toggle, setToggle] = useState(false);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleToggle = (id) => {
    setToggle(!toggle);
    if(toggle) {
      const completedTodo = todos.filter((todo) => todo.id === id ? todo.status = "completed" : todo)
      setTodos(completedTodo);
    } else {
      const completedTodo = todos.filter((todo) => todo.id === id ? todo.status = "Not Completed" : todo)
      setTodos(completedTodo);
    }
  }
 

  return (
    <Fragment>
      <Todo addTodo={addTodo} />
      {todos.map((todo) => (
        <Card key={todo.id} style={{display:"flex", justifyContent:"space-between", margin:"5px"}} sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography sx={{ color: 'warning.main' }} style={{color: todo.status === "completed" ? "gray" : ""}} gutterBottom variant="h5" component="div">
              {todo.title}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => handleToggle(todo.id)} size="small"> <CheckCircleIcon /> </Button>
            <Button onClick={() => deleteTodo(todo.id)} size="small"> <DeleteIcon /> </Button>
          </CardActions>
        </Card>
      ))}
    </Fragment>
  );
}

export default App;
