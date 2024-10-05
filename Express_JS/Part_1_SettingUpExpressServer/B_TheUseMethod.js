const express=require('express')
const app=express()

//Setting up the use function
app.use(()=>{
    console.log("Request recieved")
})

const port=3000
app.listen(port,()=>{
    console.log(`Listening at localhost port ${port}`)
})