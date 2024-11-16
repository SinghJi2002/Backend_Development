const express=require('express')
const session=require('express-session')
const app=express()

app.use(session({secret:"thisismysecret",resave:false,saveUninitialized:true}))

app.listen(3000)