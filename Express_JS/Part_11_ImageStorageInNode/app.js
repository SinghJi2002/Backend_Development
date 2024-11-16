// const express=require('express')
// const multer=require('multer')
// const ejsMate=require('ejs-mate')
// const path=require('path')
// const upload=multer({dest:'upload/'})
// const app=express()


// app.set('view engine','ejs')
// app.set('views',path.join(__dirname,'views'))
// app.use(express.urlencoded({ extended: true }));
// app.engine('ejs',ejsMate)
// app.use(express.static(path.join(__dirname, 'public')));


// //Follow are post routes of forms sending a single and multiple image. The route design using multer will look something like this.

// app.post("/singleImage",upload.single('singleImageField'),(req,res)=>{
//     console.log(req.body,req.file)
// })
// app.post("/multiImage",upload.array('multiImageField'),(req,res)=>{
//     console.log(req.body,req.files)
// })

// //Follow are get routes of forms sending a single and multiple image. The route design using multer will look something like this.


// app.get("/singleImage",(req,res)=>{
//     res.render('singleImage.ejs')
// })

// app.get("/multiImage",(req,res)=>{
//     res.render('multiImage.ejs')
// })

// app.listen(3000)


// The updated code

if(process.env.NODE_ENV!=='production'){
    require('dotenv').config()
}

const express=require('express')
const multer=require('multer')
const ejsMate=require('ejs-mate')

const path=require('path')
//First we import exports from the cloudinary scripts here in the main server file.

const {cloudinary,storage}=require('./cloudinary/index')

//The second change is to be made here. We make changes in upload variable. In place of dest:'upload/' we place storage which we have imported from the original cloudinary config script. 
const upload=multer({storage})
const app=express()

//Rest all of the code will remain the same.

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded({ extended: true }));
app.engine('ejs',ejsMate)
app.use(express.static(path.join(__dirname, 'public')));


app.post("/singleImage",upload.single('singleImageField'),(req,res)=>{
    console.log(req.body,req.file)
    res.send('See the console')
})
app.post("/multiImage",upload.array('multiImageField'),(req,res)=>{
    console.log(req.body,req.files)
    res.send('See the console')
})


app.get("/singleImage",(req,res)=>{
    res.render('singleImage.ejs')
})

app.get("/multiImage",(req,res)=>{
    res.render('multiImage.ejs')
})

app.listen(3000)