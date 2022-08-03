
// import controller from '../Controller/controller.js';

import express from "express";

import Todolist from "../Models/model.js";

const router = express.Router();

router.route("/add").post((req,res)=>{
    const title = req.body.title;
    const time = new Date().toLocaleString('en-US', { timeZone: 'UTC' });
    const marked = false

    const newtodo = new Todolist({

        title,
        time,
        marked
    })

    newtodo.save().then(()=>{
        res.status(200).send({status: "todo item added"})
    }).catch((err)=>{
        res.status(400).send({status: "todo item added failed",error:err.message})
    })

})


router.route("/").get(async(req,res)=>{
    await Todolist.find().then((Todoitems)=>{
        res.json(Todoitems);
    }).catch((err)=>{
        res.json({status:"can not fetch data",error:err.message});
    })

})
// router.post("/add",controller.add_todo);


router.route("/delete/:id").delete(async (req,res)=>{

    let todo_id = req.params.id;

    await Todolist.findByIdAndDelete(todo_id).then(()=>{
        res.status(200).send({status:"todo item deleted"});
    }).catch((err)=>{
        res.status(400).send({status:"could not deleted",error:err.message});
    })
})







export default router;



