const express=require('express')
const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const path=require('path')
const ejsMate=require('ejs-mate')
const userSchema=require('./models/userSchema')
const app=express()

mongoose.connect('mongodb://localhost:27017/authDemo').then(() => {
    console.log('MongoDB Database connected');
}).catch(err => {
    console.error('MongoDB Connection Error:', err);
});


app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded({ extended: true }));
app.engine('ejs',ejsMate)
app.use(express.static(path.join(__dirname, 'public')));

app.post("/signup",async(req,res)=>{
    const {username,password}=req.body
    const salt=await bcrypt.genSalt(10)
    const hash=await bcrypt.hash(password,salt)
    const newUser=new userSchema({
        username:username,
        password:hash
    })
    await newUser.save()
    res.redirect("/login")
})
app.post("/login",async(req,res)=>{
    const {username,password}=req.body
    const userFound=await userSchema.findOne({username:username})
    if(userFound){
        const isPassword=await bcrypt.compare(password,userFound.password)
        if(isPassword){
            res.send("Correct Password")
        }
        else{
            res.render('login.ejs',{error:true})
        }
    }
    else{
        res.render('login.ejs',{error:true})
    }
})


app.get("/signup",(req,res)=>{
    res.render('signup.ejs')
})
app.get("/login",(req,res)=>{
    const error=false
    res.render('login.ejs',{error:error})
})

app.listen(3000)
