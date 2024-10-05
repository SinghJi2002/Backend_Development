//An example of code for a server via express js.

const express = require('express')// Importing express for usage
const app = express()//Creating an instance of express
const port = 3000//Mention portname for host


//app.get, app.listen, app.post, app.delete
app.get('/', (req, res) => {
  res.send('Hello World!') 
})

//Below we are writing the get command for different pages.

// app.get('/about',(req,res)=>{
//     res.send("About")
// })
// app.get('/contact',(req,res)=>{
//     res.send("contact")
// })
// app.get('/queries',(req,res)=>{
//     res.send("queries")
// })
// app.get('/fuckme',(req,res)=>{
//     res.send("fuckme")
// })

//What you see about is us writing the get command for each page. express js provides an feature to solve this repitition issue.
app.get('/:slug',(req,res)=>{//What you see written after ':' is termed as url parameter.
    res.send(`${req.params.slug}`)
})
app.get('/:slug/:slug2',(req,res)=>{//Here slug and slug2 are request params.
  res.send(`${req.params.slug} and ${req.params.slug2}`)
  //console.log(req)//Print all to much info.
  console.log(req.params)//This will print the request parameters being used.
  console.log(req.query)//This will print the variables that we are creating in the url.
  //For http://127.0.0.1:3000/hottie/boy?lan=eng&mode=dark,
  //params prints, { slug: 'hottie', slug2: 'boy' } and query prints, { lan: 'eng', mode: 'dark' }
})
//This will solve our repition issue.   

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})