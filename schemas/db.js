import mongoose, { Mongoose } from "mongoose";

const studentSchema = new mongoose.Schema({
    email : {type: String, unique: true},
    password : String,
    fullName: String,
    vid: Number,
    
});


const attendaceSummary = new mongoose.Schema({
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


const teacherSchema = new Mongoose.Schema({
    email: String,
    password: String,
    fullName: String,
    uid: {type: Number, unique: true}
})

export const Student = mongoose.model('Student', studentSchema);
export const Teacher = mongoose.model('Teacher', teacherSchema);
export const Attendance = mongoose.model("Attendance", attendaceSummary);



