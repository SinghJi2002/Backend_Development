//U need to use app.use(express.static('<folder_name>'))
const express=require('express')
const app=express()
const port=5500;

app.use(express.static('public'))
//What express js does is protect files from getting accsessed by clients. When we need a file to be displayed to the user while protecting the backend, in that case we need a seperate file. We then need to make it public like we have done via the code above, then simply use the file. This is one advantage that express has over http pakage of node js.
app.get('/',(req,res)=>{
    res.send("Hii there")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })