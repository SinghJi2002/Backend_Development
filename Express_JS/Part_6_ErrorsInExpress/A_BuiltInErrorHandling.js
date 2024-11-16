const express=require('express')
const app=express()

app.get("/",(req,res)=>{
    res.send("This is homepage")
})

const verifyPassword=(req,res,next)=>{
    const {password}=req.query
    if(password=='iamsexy'){
        return next()
    }
    //Here is an example of built in error. In place of the code below, 
    //res.send("Wrong Password")
    //We use this.
    throw new Error('Password is wrong')
}

app.get("/secret",verifyPassword,(req,res)=>{
    res.send("My Secret is I love eating")
})

app.listen(3000)