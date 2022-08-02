import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import 'dotenv/config'


const APP = express();

const PORT = process.env.PORT || 8080;


APP.listen(PORT,()=>{
    console.log(`server is up and running on port : ${PORT}`);
})

