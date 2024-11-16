const express=require('express')
const app=express()
const cookieParser=require('cookie-parser')

app.use(cookieParser())

app.get('/access',(req,res)=>{
    const {name,food}=req.cookies
    console.log(`Cookie values are ${name} and ${food}`)
    res.send(req.cookies)
})

app.listen(3000)