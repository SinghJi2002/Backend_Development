const express=require('express')// Importing Express
const app=express()// Creating a instance of express. Using this we will perform all the functions, such as routing, listening and etc.

app.use((req,res)=>{
    res.send('Hello There')
})
//We just created a route and how will it serve us.


const port=3000//Setting up on which port the server is to be hosted.
app.listen(port,()=>{
    console.log(`Listening at localhost port ${port}`)
})
//This code will host the server and will wait to get requests from the user.