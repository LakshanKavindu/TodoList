import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Todo_Form = () => {
  return (
    <div className='form_container'>
        <form action="">
        <TextField
          id="standard-search"
          label="Enter ToDo Item Here..."
          type="search"
          variant="standard"
        />
        <Button type='submit' variant="contained" className='sub'> Add</Button>
        </form>
        
    </div>
  )
}

export default Todo_Form;