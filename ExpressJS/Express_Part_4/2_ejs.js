//1.For the purpose of this file we have created a new html file in views, with the extention ejs because only then we can actually apply all the ejs related code we write here.

const express=require("express")
const app=express()
const port=3000

app.set("view engine","ejs")//2.This code is neccessary for ejs


app.get("/ashutosh",(req,res)=>{
    //3.Suppose the following variables have been derieved from database.
    const navBarName="Ashutosh"
    const mainText="Hello Ashutosh"

    //6.We can also feed arrays onto the ejs template. See the demonstation below.
    const arr=[1,5,6,2]

    //4.Suppose I want to embed the above variables in html file we load, on reaching the mentioned route/endpoint/link without creating a seperate html file for ashutosh. For that the we use the code below,
    res.render("index",{navBarName:navBarName,mainText:mainText,arr:arr})//5.Few things I would like to add. The directory mentioned to load file in sendFile was template/index. Similarly in this case it should have been views/index. Its not the case because the render method by default search in views folder. Secondly in place of giving the root we are passing the variables that we want rendered into the basic ejs file.
})


app.listen(port,()=>{})