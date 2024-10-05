const express=require('express')
const morgan=require('morgan')
const app=express()

app.use((req,res,next)=>{
    console.log("This is first middleware")
    return next()
})
app.use((req,res,next)=>{
    console.log("This is the second middleware")
    return next()
})
app.use((res,req,next)=>{
    console.log("This is the third middleware")
    return next()
})

app.get('/',(req,res)=>{
    res.send("Hello There!!")
})

app.listen(3000);