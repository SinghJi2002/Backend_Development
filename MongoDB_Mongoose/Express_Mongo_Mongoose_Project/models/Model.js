const mongoose=require('mongoose')

const schema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Price:{
        type:Number,
        required:true,
        min:0
    },
    Category:{
        type:String,
        lowercase:true, 
        enum:['fruit','vegetable','dairy']
    }
})

const Product=mongoose.model('Product',schema)

module.exports=Product