import { TextField } from '@mui/material';
import React, {  useState } from 'react'
import { v4 as uuid } from "uuid"
import AddIcon from '@mui/icons-material/Add';


function Todo({addTodo}) {
    const [title, setTitle] = useState("");
    const onClickHandler = () => {
        // console.log(title);
        addTodo({
            id: uuid(),
            title,
            status: "Not Completed"
        });
        setTitle("");
    }
    
  return (
    <div >
      <TextField style={{width:"300px"}} label="Add Todo" variant="filled" color="success" focused value={title} onChange={(e) => setTitle(e.target.value)} />
      <button style={{height:"57px", width:"45px", border:"2px solid green"}} onClick={onClickHandler} > <AddIcon /> </button>
    </div>
  )
}

export default Todo
