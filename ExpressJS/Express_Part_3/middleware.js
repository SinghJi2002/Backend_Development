const express=require("express")
const app=express()
const fs=require("fs")
const { nextTick } = require("process")
const port=3000
//In general when we write request we write 2 things,
//1)Route/Handle
//2)Callback, which has two things in it, request and response
//Whenever we run, say a get process, the server recieves the request, req, and then its runs a suitable response or res. We have seen this already in previous code files.
//Now lets discuss about middleware. Middleware is something that edits the req part of the processes available of the request. Another function of middleware is create or perform an action for all the requests present in js file.

//Now next question, how do we create a middle ware. Well the simple way is to use, app.use. The use method will take in function, with three parameters, req,res and next. The next argument will be used to connect multiple middlewares together. Now lets code to understand. 

// app.use((req,res,next)=>{
//     console.log("Middleware 1")
//     next()
// })

// app.use((req,res,next)=>{
//     console.log("Middleware 2")
//     next()
// })



// //If in case next is removed, the page will go on loading waiting for response.
// app.use((req,res,next)=>{
//     console.log("Middleware 1")
// })
// app.use((req,res,next)=>[
//     console.log("Middleware 2")
// ])


//If in case you want to break the middleware chain inbetween multiple middlewares, then generate response.
// app.use((req,res,next)=>{
//     res.send("Hi there")
//     next()
// })
// app.use((req,res,next)=>{
//     console.log("Module post send")
//     next()
// })


//Above we mentioned that if we want to do something for each request from a js file, we will use middleware for that purpose.
app.use((req,res,next)=>{
    fs.appendFileSync("log.txt",`${Date.now} is ${req.method}\n`)
    next()
})
//Above code does one thing, for every request that is being executed, a log of that request will be created in log.txt file.

// app.get("/",(req,res)=>{
//     res.send("Main Page")
// })

// app.get("/about",(req,res)=>{
//     res.send("About Page")
// })
// app.get("/contact",(req,res)=>{
//     res.send("Contact Page")
// })


//Below is an example where we are editing the req property via middleware.

app.use((req,res,next)=>{
    req.ashu="Hello there guys."
    next()
})

//Order in which the middleware are used, it matters. Lets understand it via the example of req.ashu property.

app.use((req,res,next)=>{
    req.ashu="If I Speak"
    next()
})

app.use((req,res,next)=>{
    req.ashu="Good Ebening"
    next()
})

app.get("/",(req,res)=>{
    res.send("Main Page")
})

app.get("/about",(req,res)=>{
    res.send("About Page")
})
app.get("/contact",(req,res)=>{
    res.send(`Contact Page ${req.ashu}`)
})



//All the middlewares used above are examples of application level middleware.

//View the file in route folder to see implementation of routed middleware.

//Do refer reference material from the "Using Middleware" section, to see different types of middlewares.
app.listen(port,()=>{
    console.log(`Code loaded on ${port}`)
})