const express=require('express')
const app=express()

//What we are going to do is simple. We create a secret. We will display it on a web page. But we will protect the route on which this secret is to be displayed. We will create password for verification. We will create a URL, and in that URL we will send a query, password. This password will be verified, and secret will be displayed. Else password wrong message will be displayed. 

app.get("/",(req,res)=>{
    res.send("This is homepage")
})

const verifyPassword=(req,res,next)=>{
    const {password}=req.query
    if(password=='iamsexy'){
        return next()
    }
    res.send("Wrong Password")
}

app.get("/secret",verifyPassword,(req,res)=>{
    res.send("My Secret is I love eating")
})

//Lets understand whats happening in the code above. The first route is the homepage route. Next is the function to check password's accuracy. When localhost:3000/secret?password= is called, password applied is checked by this function. If correct, next() is called, triggering GET on the /secret route. If wrong, "Wrong Password" is displayed. 

//Lets understand basic semantics. There are 2 callbacks being triggered here in the /secret GET route. The 'verifyPassword' and the normal callback. The 'verifyPassword' callback is executed first and then based on what happens in this callback, the next callback is called, sometimes not called.

app.listen(3000)