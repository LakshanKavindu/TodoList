import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckIcon from '@mui/icons-material/Check';
import AddBoxIcon from '@mui/icons-material/AddBox';
import {useNavigate} from 'react-router-dom';

const Todo_list_container = () => {
    const navigate = useNavigate();
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


    const del_todo =(e)=>{
        
        axios.delete(`http://localhost:8080/todo/delete/${e.target.name}`).then((res)=>{
            console.log(res.data);
            settodoItems(todoItems.filter(todo=> todo._id !== e.target.name));

        }).catch((err)=>{
            console.log(`error : ${err}`);
        })
       

        
        
        
        
        
      

    }
 



    if (todoItems!=0){
        return (
            <div className='container-fluid todo_list_container' >
                <div className="second_container">
                   
                {
                        todoItems.map((Todo)=>(
                            
                         
                            <div className='todo_item_container' key={Todo._id}  >
                                <div className="todo_details">
                                    <h5>{Todo.title}</h5>
                                    <p>{Todo.time}</p>
                                   
                                </div>
                                <div className="todo_buttons">
                                    
                                    <Stack spacing={2} direction="row">
                                        
                                        <Button variant="contained" color="success"><CheckIcon/></Button>
                                        <Button variant="contained" color="error" name={Todo._id} onClick={del_todo} >DELETE <DeleteForeverIcon className='del_btn'/></Button>
                                    </Stack>
                                </div>
                                   
                            </div>
                        )
                   ) }
                </div>
                   
            </div>
        )
    }
    else{
        return(
            <div className="container-fluid blank_container">
                <h1 className='blank_title'>There are no todo items yet.</h1>
                <Button variant="contained" color="success" onClick={()=>navigate("/add")}>Add<AddBoxIcon className='plus'/></Button>
            </div>
        )
        
    }
   
}

export default Todo_list_container;