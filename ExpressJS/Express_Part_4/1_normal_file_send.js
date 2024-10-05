const express=require("express")
const app=express()
const port=3000

app.get("/",(req,res)=>{
    res.sendFile("/templates/index.html",{root:__dirname})
})


app.listen(port,()=>{})

//Above seen nothing new. We file created an express js server, we have saved a html file in templates folder and we are loading that file when we are opening the mentioned endpoint(link). Now every page isnt the same. They may have the same look, but they are not the same. For instance, a blog site, the template of each file is the same, but the content differ. So if we assume we have build a blog site with lets say, 1000 blogs, we cannot have 1000 html pages for each blog site. We can have a template html and then we can simply change the content of this html via content of each blog, something that we can derive from data stored in dbms. So now the thing is, we cannot do above mentioned things with normal sendFile method we got there. For that we will need two things, 1 is render, and the other is, EJS. View the next file to understand what I mean. Next file name is ejs.js 