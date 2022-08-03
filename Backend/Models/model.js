import mongoose from "mongoose";

const schema = mongoose.Schema;

const todoschema = new schema(

    {
        title:{
            type:String,
            required:true
        },
        time:{
            type:String,
           
        },
        marked:{
            type:Boolean,

        }
    }

);


const Todo = mongoose.model("Todolist",todoschema);

export default Todo;