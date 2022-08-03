import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import 'dotenv/config'
// import { config } from "dotenv";
import TodoRouter from "./Routes/router.js";


const App = express();

App.use(cors());
App.use(bodyParser.json());

const URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 8080;

mongoose.connect(URL);

const connection = mongoose.connection;

connection.once("open",()=>{
    console.log("db connected succesfully");
    
})

App.use("/todo",TodoRouter);


App.listen(PORT,()=>{
    console.log(`server is up and running on port : ${PORT}`);
})


 
