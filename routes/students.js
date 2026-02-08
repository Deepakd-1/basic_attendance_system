import { Router } from "express";
import { isStudentValid } from "../schemas/validations";
import { Student, Attendance } from "./schemas/db";
import bcrypt from 'bcrypt';
import { config } from "dotenv";
import jwt from 'jsonwebtoken';
import mongoose from "mongoose";
config();


export const studentRouter = Router();

const jwtpass = process.env.STUDENTJWT;

const authMiddleware = async (req, res, next)=>{
    try{
        const authToken = req.headers.authorization;
        if(!authToken.startsWith("Bearer ")){
            return res.status(401).send("Authorization token missing");
        }
        const token = authToken.split(" ")[1];
        const payload = jwt.verify(token, jwtpass);
        const vid = payload.vid;
        const student = await Student.findOne({vid});
        if(!student){
            return res.status(404).send("Student is not enrolled");
        }
        req.vid = vid;
        next();
    }
    catch(err){
        next(err);
    }
}

studentRouter.post('/login', async (req,res, next)=>{
    try{
    const {vid, password} = req.body;
    const student = await Student.findOne({vid});
    if(!student){
        return res.status(404).send("Student Not Enrolled");
    }
    const match = await bcrypt.compare(password, student.password);
    if(!match){
        return res.status(400).send("Incorrect Password, Try Again");
    }
    const token = jwt.sign({id : student._id ,vid: vid}, jwtpass);
    res.status(200).json({message: "Login Successful", jwt: token});
    }
    catch(err){
        next(err);
    }

});

studentRouter.use(authMiddleware);

studentRouter.get('/AttendanceSummary', async (req,res,next)=>{
    try{
        const vid = req.vid;
        const data = await Attendance.findOne({vid});
        res.status(200).json(data);
    }
    catch(err){
        next(err);
    }
});
