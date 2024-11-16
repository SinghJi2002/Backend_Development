const express=require('express')
const mongoose=require('mongoose')
const fruitSchema=require('./models/fruitSchema')
const app=express()

//0. For working with asynchronous functions we are going to create a random database and seed values into it. We have created a fruitDatabase and in that database we have the fruitSchema Collection.
mongoose.connect("mongodb://localhost:27017/yelpCamp").then(()=>{
    console.log("Connected")
}).catch((err)=>{
    console.log(err)
})

//1.Now there is a the cryptic case of asynchronous function. We have seen numerous ways in which we can implement error handling for normal functions. But what about asynchronous functions. For asynchronous functions the simple trick is that in place of directly throwing the error, we will but the error in next callback and then run it. See the codes below to understand.

app.get("/",(req,res,next)=>{
    
})