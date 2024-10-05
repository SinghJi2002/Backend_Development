//5.Below we are creating a database's schema.
import mongoose from "mongoose";

//6.Below is the schema.
const schema=new mongoose.Schema({
    Name:{type: String, required:true, default:"Name Not Entered"},
    Roll:Number,
    Marks:{type: Number, min:0, max:100},
    Passed:Boolean
})

//7.We know that in mongoDB, we create a database and then there are many collections in each database. In main js file, the line "await mongoose.connect("mongodb://localhost:27017/Student")" is creating Student database. In the app.get("/") line we see student.save(). This is creating student collection. The schema file is just providing the structure to the student collection. 
export const Student=mongoose.model('Student',schema)
//8. Above code is sending the schema when imported. The first argument is "Student" is the name of the schema and this is to be imported.