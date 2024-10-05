const express = require('express')
const app = express()
const port = 3000
//The default request used by the browser is the get request. Its used for general purposes only. It has a character limit of 2048 words hence this cant be used for transfer of large data but only the small ones. Note that files, passwords, username are not sent server via get but via post, because since every thing is in the url, it leads to security breach and also its size is limited so file transfer is not possible.
app.get('/', (req, res) => {
    console.log("Get request working")
    res.send('Hello Get!')
})

app.post('/',(req,res)=>{
    console.log("Post Request Working")
    res.send("Hello Post!")
})

app.use(express.static('public'))

//Next is the put request that is used for updation
app.put("/",(req,res)=>{
    console.log("Put Request Working")
    res.send("Hello Put!!")
})

//Next is the delete request.
app.delete("/",(req,res)=>{
    console.log("Delete Request Working")
    res.send("Hello Delete!!")
})

//We can write the above request with the same endpoints in a chained fashion.


// app.get('/', (req, res) => {
//     console.log("Get request working")
//     res.send('Hello Get!')
// }).post('/',(req,res)=>{
//     console.log("Post Request Working")
//     res.send("Hello Post!")
// }).put("/",(req,res)=>{
//     console.log("Put Request Working")
//     res.send("Hello Put!!")
// }).delete("/",(req,res)=>{
//     console.log("Delete Request Working")
//     res.send("Hello Delete!!")
// })


//Now we can see how can we render html file. to do that we simple use the sendFile method. See ahead.
app.get("/html",(req,res)=>{
    res.sendFile("/templates/display.html", {root: __dirname})
})

//Mainly in the code above we see that we are handling only those routes that start with /. We via very this server can handle requests for routes such as /blog, though it would create clatter environment. One way to handle this is using express routers. for this we create a now routes file to store our html routes, and will create a blog js file handling requests for /blog route.
const blog=require("./routes/blog")
app.use("/blog",blog)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})