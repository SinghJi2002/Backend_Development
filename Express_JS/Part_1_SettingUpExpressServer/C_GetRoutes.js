const express=require('express')
const app=express()

//Following are our get routes.
//Home route
app.get("/",(req,res)=>{
    console.log("Home route")
    res.send("Hello to animal voice website")
})

//Cat route
app.get("/cat",(req,res)=>{
    console.log("Cat voice")
    res.send("Meow!!")
})

//Dog route
app.get("/dog",(req,res)=>{
    console.log("Dog voice")
    res.send("Woof!!")
})

//Universal Route. Kicks in when any other route other than / /cat and /dog are called upon
app.get("*",(req,res)=>{
    console.log("Universal Sound")
    res.send("This is an universal route")
})

const port=3000

app.listen(port,()=>{
    console.log("App running on port 3000")
})