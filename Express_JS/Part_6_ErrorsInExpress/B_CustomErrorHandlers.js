const express=require('express')
const app=express()

//1.Lets create a custom error handler. We are going to create this handler in a file called AppError.js.
//2.Once we have created the custom error class, next step is to import it.

const AppError=require('./AppError')

//3.One way to implement the AppError class is use it in the built in mode.

app.get("/",(req,res)=>{
    res.send('This is homepage')
})

const verifyPassword=(req,res,next)=>{
    const {password}=req.query
    if(password=='iamsexy'){
        return next()
    }
    //4. As you can see here.
    throw new AppError('Password Is Wrong',401)
}

app.get("/secret",verifyPassword,(req,res)=>{
    res.send('My secret is I love eating food')
})

app.listen(3000)