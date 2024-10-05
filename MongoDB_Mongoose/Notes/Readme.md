# What is MongoDB?
Mongo is a document database, which we can use to store and retrieve complex data from.

# Why use databases?
* Databases can handle large amounts of data efficiently and store it compactly.
* They provide tools for easy insertion, querying, and updation of data.
* They scale well.
* They generally offer security features and control over access of data.

# Types of databases

## SQL Databases
SQL databases are relational databases. We need to pre-define a schema of tables before inserting anything.

## NoSQL Databases
NoSQL databases do not use predefined relational models. There can be many types of no-sql databases, including document, key-value, and graph stores.

Note that please refer to MongoDB_Part_1 folder and the CRUD operation performed in the file in that folder to get used to how mongoDB works.

# CRUD Operations In MongoDB
The code to perform CRUB operation on MongoDB without express is as follows,

```js
//Creating a database.
use("This_Is_Sample_Database")

//Creating a collection
db.createCollection("This_Is_Sample_Collection")

//Entering data into the collections. On at a time.
db.This_Is_Sample_Collection.insertOne({
    Name:"Ashutosh Kumar Singh",
    Roll:22052974,
    Marks:100
})

//Entering data into the collections. Many at a time.
db.This_Is_Sample_Collection.insertMany([
    {
        Name:"Divyansh Bajpai",
        Roll:22052980,
        Marks:100
    },
    {
        Name:"Ashish Kumar",
        Roll:22052888,
        Marks:90
    },
    {
        Name:"Dikshant Sawaran",
        Roll:22053157,
        Marks:100
    }
])

//Reading document from collection. Many at a time.
db.This_Is_Sample_Collection.find({Marks:100})

//Reading document from collection. One at a time.
db.This_Is_Sample_Collection.findOne({Marks:100})//Prints the first matching datapoint only.


//Updating document from collection. One at a time.
db.This_Is_Sample_Collection.updateOne({Name:"Ashutosh Kumar Singh"},{$set: {Roll:22052975}})//The first argument is filter and the second the updation u want to make.

//Updating document from collection. Many at a time.
db.This_Is_Sample_Collection.updateMany({Marks:100},{$set:{Marks:85}})  

//Deleting a document from collection. One at a time.
db.This_Is_Sample_Collection.deleteOne({Marks:85})

//Deleting a document from collection. Many at a time.
db.This_Is_Sample_Collection.deleteMany({Marks:85})

//Using the $lt $gt $lte and $gte in mongo search engine
db.This_Is_Sample_Collection.find({Marks:{$gt:80}})

//Using $in in mongo search engine
db.This_Is_Sample_Collection.find({Roll:{$in:['22052974','22053157']}})

//Using $or in mongo search engine
db.This_Is_Sample_Collection.find($or:[{Marks:100},{Name:"Ashutosh Kumar Singh"}])

//Please study query and projection operator from the link below.
//https://www.mongodb.com/docs/manual/reference/operator/query/
```


# Mongoose

Mongoose can be seen as a platform that connects `Express JS` and `MongoDB`. Basic establishment of connection between express and mongodb using mongoose is encoded below,

```js
const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/farmStand").then(()=>{
    console.log("Connection Established")
}).catch((err)=>{
    console.log("Connection Not Established")
    console.log(err)
})
```

After this connection is established we can perform CRUD operations on mongoDB in association with express. Example is as follows,

```js
const express=require('express')
const app=express()
const path=require('path')
const mongoose=require('mongoose')
const Product=require('./models/Model')
const methodOverride=require('method-override')

mongoose.connect("mongodb://localhost:27017/farmStand").then(()=>{
    console.log("Connection Established")
}).catch((err)=>{
    console.log("Connection Not Established")
    console.log(err)
})

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'views'))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))

app.get("/product", async (req,res)=>{
    const products=await Product.find({})
    res.render("products.ejs",{products:products})
})

app.get("/product/create", (req,res)=>{
    res.render('createNewProduct.ejs')
})

app.post("/product", async(req,res)=>{
    const {productName,productPrice, productCategory}=req.body
    const newProduct=new Product({
        Name:productName,
        Price:productPrice,
        Category:productCategory
    })
    await newProduct.save()
    res.redirect("/product")
})

app.get("/product/:id/delete",(req,res)=>{
    res.send("Item deleted")
})

app.delete("/product/:id/delete", async (req,res)=>{
    const {id}=req.params
    await Product.deleteOne({_id:id})
    res.redirect("/product")
})

app.put("/product/:id", async(req,res)=>{
    const {id}=req.params
    const {productName,productPrice,productCategory}=req.body
    const product=await Product.findById(id)
    await Product.updateOne({_id:id},{$set:{
        Name:productName,
        Price:productPrice,
        Category:productCategory
    }})
    res.redirect(`/product/${id}`)
})

app.get("/product/:id/update", async(req,res)=>{
    const {id}=req.params
    const product=await Product.findById(id)
    res.render('update.ejs',{product:product})
})


app.get("/product/:id",async(req,res)=>{
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('show.ejs', {product});
})



app.listen(3000,()=>{
    console.log("App running at port 3000")
})
```

