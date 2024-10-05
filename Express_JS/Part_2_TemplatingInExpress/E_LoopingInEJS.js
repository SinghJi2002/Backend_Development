const express=require('express')
const app=express()

app.set('view engine', 'ejs')

app.get("/",(req,res)=>{
    let arrays=['ashutosh','divyansh','dikshant','adarsh','shreyansh']

    res.render('looping.ejs',{list:arrays})
})

app.listen(3000,()=>{
    console.log("Port 3000 is running")
})