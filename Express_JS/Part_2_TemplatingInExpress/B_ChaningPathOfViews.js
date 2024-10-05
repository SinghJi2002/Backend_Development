const express=require('express')
const path=require('path')

const app=express()

app.set('view engine', 'ejs')

app.set('views', path.join(__dirname,'/views'))//Here we are chaning path of views from only views to currentDirectory+views

app.get("/",(req,res)=>{
    res.render('home.ejs')
})

app.listen(3000,()=>{
    console.log("App is running on port 3000")
})