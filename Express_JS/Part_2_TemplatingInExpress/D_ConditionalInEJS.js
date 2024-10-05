const express=require('express')
const app=express()

app.set('view engine', 'ejs')

app.get("/",(req,res)=>{
    let number=Math.floor(Math.random()*10)
    let conditional=false
    if(number%2==0){
        conditional=true
    }
    res.render('conditionals.ejs',{conditional:conditional,num:number})
})

app.listen(3000,()=>{
    console.log("The port 3000 is running")
})