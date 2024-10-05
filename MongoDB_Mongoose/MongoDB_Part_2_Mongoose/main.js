//1. Firstly we have changed the doc type from common js to module.
//2. For using mongoose we have imported it. Note the way the libraries have been imported here. import <Name of library> from "<Name of library>"
const mongoose=require("mongoose")
const express=require("express")
import { Student } from "./models/demoSchemaMongoose.js"

//3. First we are connect to mongoose to mongoDB and the express js server.
let conn=await mongoose.connect("mongodb://localhost:27017/Student").then(()=>{
    console.log("Connection Established")
}).catch((err)=>{
    console.log("Connection Failed")
    console.log(err)
})

//4. To use MongoDB, we need to define the schema. See the demoSchemaMongoose.js file in models(preffered you store schemas in a model folder).

const app=express()
const port=3000


app.get("/",(req,res)=>{
    res.send("Hello World!!")
})


app.get("/createData",(req,res)=>{

    //9.Below we are creating object as per the defined "schema" and storing it in "Student" collection of Student database. 
    const student=new Student({
        Name:"Maninder",
        Roll:22052205,
        Marks:15,
        Passed:false
    })
    student.save()
})

app.get("/createManyData",(req,res)=>{
    //9.1. Note that insertMany or any other "Many" function of CRUD, doesnt requires the .save() method for it to be saved. They directly work on the database. But they return a promise that needs to be handled, which you will see below.
    Student.insertMany({
        Name:"Ashutosh",
        Roll:22052974,
        Marks:100,
        Passed:true
    },
    {
        Name:"Divyansh",
        Roll:22052980,
        Marks:100,
        Passed:true
    }).then(()=>{
        console.log("Connection Created")
    }).catch((err)=>{
        console.log("Connection Failed")
        console.log(err)
    })
})



//10.Below you are going to see instance of us running to find data items from the database's collection.
app.get("/readData",async(req,res)=>{
    //11.Data is being procured here. 
    let student=await Student.findOne({Name:"Ashutosh"})
    //12.Collected data is being printed below.
    res.send({Name:student.Name, Roll:student.Roll, Marks:student.Marks, Passed: student.Passed})
})

//13. Below you are going to see instance of us running update data items from the database's collection.
app.get("/updateData",async (req,res)=>{
    let student=await Student.updateOne({Name:"Maninder"},{Name:"Shukla"})
    let data=await Student.findOne({Name:"Shukla"})
    res.send({Name:data.Name,Roll:data.Roll,Marks:data.Marks,Passed:data.Passed})
})

//14.Below you are going to see instance of us running delete data items from the database's collection.
app.get("/deleteData",async(req,res)=>{
    let student=await Student.deleteOne({Name:"Shukla"})
    let data=await Student.find({})
    res.send({Name:data.Name,Roll:data.Roll,Marks:data.Marks,Passed:data.Passed})
})


app.listen(port,()=>{})




