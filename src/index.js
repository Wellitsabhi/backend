// require('dotenv').config({path: './env'});
import dotenv from 'dotenv';
import  connectDB from "./db/db.js";

dotenv.config({
    path: './env'

})

connectDB();




/*
import express from "express";
const app = express();
// IIFE
(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);  
        app.on("error", (error)=>{
            console.log("Error: ", error);
            throw Error
        })
        app.listen(process.env.MONGODB_URL,()=>{
            console.log(`App is listening on ${process.env.MONGODB_URL}`);
        })

    } catch (error) {
        console.error("Error");
    }
})()
*/