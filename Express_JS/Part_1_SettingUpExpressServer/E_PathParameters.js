// const express=require('express')
// const app=express()

// //Following are our get routes.
// //Home route
// app.get("/",(req,res)=>{
//     console.log("Home route")
//     res.send("Hello to animal voice website")
// })

// //Now in a animal voice website there can be voices of many animals rather than just dog and cat. But its not feasable to create route for each and every animal. We will use path parameter and solve this issue of ours.

// app.get("/voices/:animal",(req,res)=>{
//     //To access path parameter use params method of req element

//     const {animal}=req.params

//     res.send(`Voice of ${animal}`)

//     console.log(`${animal}`)

// })//The :animal is the path parameter that will take different values.

// const port=3000

// app.listen(port,()=>{
//     console.log("App running on port 3000")
// })

const express=require('express')
const app=express()

//Following are our get routes.
//Home route
app.get("/",(req,res)=>{
    console.log("Home route")
    res.send("Hello to animal voice website")
})

app.get("/voices/:animal/:breed",(req,res)=>{

    const {animal,breed}=req.params

    res.send(`Voice of ${animal} of the breed ${breed}`)

    console.log(`${animal} and ${breed}`)

})
const port=3000

app.listen(port,()=>{
    console.log("App running on port 3000")
})