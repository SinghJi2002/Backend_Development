const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const fruitSchema=new Schema({
    name:{
        type:String,
    },
    color:{
        type:String
    },
    price:{
        type:Number
    }
})

module.exports=mongoose.model("fruitSchema",fruitSchema)
