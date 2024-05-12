import mongoose from "mongoose";
export const dbconnections = () =>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "MERN_STACK_JOB_SEEKING"
    }).then(()=>{
        console.log('Connected to DataBase!');
    }).catch((err)=>{
        console.log(`Some error occured  while connecting to database: ${err}`);
    });
 };