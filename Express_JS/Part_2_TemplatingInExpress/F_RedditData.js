const express=require('express')
const app=express()
const redditData=require('./data.json')

app.set('view engine', 'ejs')

app.get('/:subreddit',(req,res)=>{
    const {subreddit}=req.params
    const data=redditData[subreddit]
    if(data){
        res.render('subreddit.ejs',{ data:data })
    }
    else{
        res.send("File not found")
    }
})

app.listen(3000,()=>{
    console.log("The port 3000 is running")
})