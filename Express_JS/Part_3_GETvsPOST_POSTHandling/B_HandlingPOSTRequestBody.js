const express=require('express')
const app=express()

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render('getPost.ejs')
})

app.get('/eggRoll',(req,res)=>{
    const {typeOfRoll,numberOfEggs}=req.query
    res.send(`You have ordered ${typeOfRoll} roll with ${numberOfEggs} eggs`)
})

app.post('/eggRoll',(req,res)=>{
    const {typeOfRoll,numberOfEggs}=req.body
    res.send(`You have ordered ${typeOfRoll} roll with ${numberOfEggs} eggs`)
})

app.listen(3000,()=>{
    console.log("Port 3000 is working")
})