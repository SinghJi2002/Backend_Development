const express=require('express')
const app=express()

app.get('/',(req,res,next)=>{
    res.send("Home Page")
})
app.get('/dog',(req,res,next)=>{
    res.send("Dog Page")
})
app.get('/cat',(req,res,next)=>{
    res.send("Cat Page")
})

//This is the 404 route. Its always placed at the last or else it will get executed at every ping. All the pings at the route / /dog and /cat will execute sucessfully. On ping at any other route, this 404 route will execute.
app.use((req,res)=>{
    res.status(404).send("Not Found!!")
})

app.listen(3000);