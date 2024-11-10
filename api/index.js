import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("mongodb connected successfuly")
}).catch(err=>{
    console.log(err)
});

app.listen(3333, () => {
  console.log("port is listening port 3333!");
});
