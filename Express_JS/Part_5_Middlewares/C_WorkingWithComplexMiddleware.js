const express=require('express')
const app=express()

app.use((req,res,next)=>{
    req.requestTime=Date.now()
    console.log(req.method,req.path)
    return next()
})

app.get('/',(req,res)=>{
    console.log(req.requestTime)
    res.send("Hello There!!")
})

app.listen(3000)