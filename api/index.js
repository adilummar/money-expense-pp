import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from './routes/auth.route.js'

dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("mongodb connected successfuly");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(express.json())
app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)

app.listen(2999, () => {
  console.log("port is listening port 2999!");
});
