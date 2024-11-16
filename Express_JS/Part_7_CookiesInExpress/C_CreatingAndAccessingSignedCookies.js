const express=require('express')
const app=express()
const cookieParser=require('cookie-parser')

app.use(cookieParser('thisIsTheSecretCode'))

app.get("/",(req,res)=>{
    res.cookie('fruit','apple',{signed:true})
    res.send("Cookies have been sent!!")
})

app.get("/accessSigned",(req,res)=>{
    res.send(req.signedCookies)
})

app.listen(3000)