import { Router } from "express";
import { isStudentValid } from "../schemas/validations";
import { Student, Attendance } from "./schemas/db";
import z from 'zod';
import jwt from 'jsonwebtoken';



export const studentRouter = Router();

studentRouter.post('login', (req,res)=>{
    const isValid = isStudentValid.safeParse(req.body);
    if(!isValid){
        return res.status(400).send("Invalid in Input");
    }
    const {name, password, fullName, vid} = req.body;
    const student = Student.findOne({vid});
    if(!student){
        return res.status(404).send("Student Not Enrolled");
    }
})