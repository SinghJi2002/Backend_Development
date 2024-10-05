const express=require('express')
const path=require('path')
const app=express()

app.set('view engine', 'ejs')

//To serve JS and CSS files linked to our main HTML file, we use .use method of express under which we use express.static and add the directory name in which the JS and CSS files are and then they are served into the webpage.

//app.use(express.static('public'))

//Like we did in case of views folder, for easy accessibility we can also use path method of express.

app.use(express.static(path.join(__dirname,'public')))


app.get("/",(req,res)=>{
    res.render('static.ejs')
})

app.listen(3000,()=>{
    console.log("Port 3000 is listening")
})