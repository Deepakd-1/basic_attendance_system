import mongoose, { Mongoose } from "mongoose";

export const studentSchema = new mongoose.Schema({
    email : {type: String, unique: true},
    password : String,
    fullName: String,
    vid: Number,
    
});


export const attendaceSummary = new mongoose.Schema({
    name: String,
    vid: Number,
    totalClasses: Number,
    totalPresent: Number,
    percentage: Number,
    bySubject: {
            DBMS:
            {
                totalClasses: Number,
                totalPresent: Number,
                percentage: Number,
            },
            OS:
            {
                totalClasses: Number,
                totalPresent: Number,
                percentage: Number,
            },
            Maths:
            {
                totalClasses: Number,
                totalPresent: Number,
                percentage: Number,
            },
            DSA:
            {
                totalClasses: Number,
                totalPresent: Number,
                percentage: Number,
            },
    }
});


export const teacherSchema = new Mongoose.Schema({
    email: String,
    password: String,
    fullName: String,
    uid: {type: Number, unique: true}
})



