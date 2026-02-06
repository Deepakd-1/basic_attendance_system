import express from 'express';
import mongoose from 'mongoose';
import {config} from 'dotenv'
import { studentRouter } from './routes/students';
import { teacherRouter } from './routes/teacher'
config();

const app = express();
const port = process.env.PORT;
app.use(express.json());


app.use('/techers', teacherRouter);
app.use('/student', studentRouter);


app.use((err, req, res, next)=>{
    res.status(500).send("Fatal Error Occured");
})

const  main = async ()=>{
    try{
        await mongoose.connect();
        app.listen(port, ()=>{
            console.log('Listening to Port');
        })    
    }
    catch(err){
        console.log("Failed to start the server");
    }
}
main();