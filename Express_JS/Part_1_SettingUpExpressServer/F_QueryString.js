const express=require('express')
const app=express()

app.get("/:animal",(req,res)=>{
    const {animal}=req.params

    //Accessing query string
    const {query}=req.query
    if(query){
        res.send(`Animal is ${animal} and query is ${query}`)
        console.log("Query Detected")
    }
    else{
        res.send(`No query no search`)
        console.log("Query not detected")
    }
})
    
const port=3000
    
app.listen(port,()=>{
    console.log("App is running")
})