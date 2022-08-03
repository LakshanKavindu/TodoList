import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckIcon from '@mui/icons-material/Check';

const Todo_list_container = () => {

    const[todoItems,settodoItems] = useState([]);

    useEffect(()=>{
        const get_todos = ()=>{
            axios.get("http://localhost:8080/todo").then((res)=>{
                    settodoItems(res.data);
           
                    
                  
            }).catch((err)=>{
                console.log(`error ${err}`);
            })
        }

        get_todos();
    },[])
    return (
        <div className='container-fluid todo_list_container'>
            <div className="second_container">
            {
                    todoItems.map((Todo)=>(
                        
                        
                        <div className='todo_item_container' >
                            <div className="todo_details">
                                <h5>{Todo.title}</h5>
                                <p>{Todo.time}</p>
                            </div>
                            <div className="todo_buttons">
                                
                                <Stack spacing={2} direction="row">
                                    
                                    <Button variant="contained" color="success"><CheckIcon/></Button>
                                    <Button variant="contained" color="error">Outlined <DeleteForeverIcon/></Button>
                                </Stack>
                            </div>
                               
                        </div>
                    )
               ) }
            </div>
               
        </div>
    )
}

export default Todo_list_container;