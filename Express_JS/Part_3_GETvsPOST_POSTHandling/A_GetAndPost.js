const express=require('express')
const app=express()

app.set('view engine', 'ejs')


app.get("/",(req,res)=>{
    res.render('getPost.ejs')
})

app.get('/eggRoll',(req,res)=>{
    res.send("Response to GET Request")
})

app.post('/eggRoll',(req,res)=>{
    res.send("Response to POST Request")
})

app.listen(3000,()=>{
    console.log("Port 3000 Running")
})