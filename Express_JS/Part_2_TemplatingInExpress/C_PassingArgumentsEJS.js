const express=require('express')
const app=express()

app.set('view engine', 'ejs')

app.get('/',(req,res)=>{
    //Lets perform a mathematical operation
    let num=Math.floor(Math.random()*10)

    //We pass arguments in ejs file while rendering them. We make a key:value pair while having only the key accessible to the ejs end. See code.

    res.render('home.ejs',{num:num})
})

app.listen(3000,()=>{
    console.log("Port 3000 is running")
})