import todo_schema from "../Models/model.js";
import express from "express";

const add_todo =(req,res)=>{
    const title = req.body.title;
    const time = new Date().toLocaleString('en-US', { timeZone: 'UTC' });
    const marked = false;

    const newtodo = new todo_schema({

        title,
        time,
        marked
    })

    newtodo.save().then(()=>{
        res.status(200).send({status: "todo item added"})
    }).catch((err)=>{
        res.status(400).send({status: "todo item added failed",error:err.message})
    })
}

// export default add_todo;