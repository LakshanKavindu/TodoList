import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import todoimage from './todoimg.webp';

const Todo_Form = () => {
  const [title,set_title] = useState("");
  const send_data =(e)=>{
    e.preventDefault();

    const new_todo_item = {

      title
    }
    
    axios.post("http://localhost:8080/todo/add",new_todo_item).then(()=>{
      alert("Todo item addded");
      set_title("");
    }).catch((err)=>{
      alert(`err : ${err}`);
    })

  }
  return (
    <div className="container-fluid back_image_container">
       <div className='form_container'>
          <form action="" onSubmit={send_data}>
          <TextField
            id="standard-search"
            label="Enter ToDo Item Here..."
            type="search"
            variant="standard"
            onChange={(e)=>{
              set_title(e.target.value);
            
            }}
          />
          <Button type='submit' variant="contained" className='sub'> Add</Button>
          </form>
        
      </div>
      <div className="back_image">
        <img src={todoimage} />
      </div>
    </div>
   
  )
}

export default Todo_Form;