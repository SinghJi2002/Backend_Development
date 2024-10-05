const mongoose=require('mongoose')
const Product=require('./models/Model')

mongoose.connect("mongodb://localhost:27017/farmStand").then(()=>{
    console.log("Connection Established")
}).catch((err)=>{
    console.log("Connection Not Established")
    console.log(err)
})

const products=[
    {
        Name:"Apple",
        Price:1.75,
        Category:"fruit"
    },
    {
        Name:"Tomato",
        Price:2.5,
        Category:"vegetable"
    },
    {
        Name:"Milk",
        Price:2.5,
        Category:"dairy"
    }
]

Product.insertMany(products).then(()=>{
    console.log("Saved")
}).catch((err)=>{
    console.log("Error")
})