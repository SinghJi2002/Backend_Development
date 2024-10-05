const express=require('express')
const app=express()

app.set('view engine', 'ejs') //Setting up the view engine as talked before

app.get("/",(req,res)=>{
    res.render('home.ejs')//Note the default directory in which the render methods looks into is /views.
})

app.listen(3000,()=>{
    console.log("Running on port 3000")
})