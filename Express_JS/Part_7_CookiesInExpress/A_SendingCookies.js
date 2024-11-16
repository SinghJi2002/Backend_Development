const express=require('express')
const app=express()

app.get("/",(req,res)=>{
    res.cookie('name','ashutosh')
    res.cookie('food','chola')
    res.send('Cookies are sent!!')
})

app.listen(3000)