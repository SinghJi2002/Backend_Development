const express=require('express')
const app=express()

//1.Lets create a custom error handler. We are going to create this handler in a file called AppError.js.
//2.Once we have created the custom error class, next step is to import it.

const AppError=require('./AppError')

//3.Another way to implement AppError class is use the app.use middleware to implement errors.

app.get("/",(req,res)=>{
    res.send('This is homepage')
})

const verifyPassword=(req,res,next)=>{
    const {password}=req.query
    if(password=='iamsexy'){
        return next()
    }
    throw new AppError('Password Is Wrong',401)
}

app.get("/secret",verifyPassword,(req,res)=>{
    res.send('My secret is I love eating food')
})

//4. As you can see here.
app.use((err,req,res,next)=>{
    const {message,status}=err
    res.status(status).send(message)
})

//5. I will explain you how this code is working. We have already known how protection of routes is performed via query strings. Now in the first implementation, we sent a simple res.send that showed an output. Here we are performing with the help of a custom error handler. How?. Simple you send the wrong password, the AppError error class is invoked. This further invokes the error handler middleware that we see above. We extract the error code and message and then print the status and message. As observable the output screen will look different than directly implementing the AppError class which we did in the previous code.

app.listen(3000)