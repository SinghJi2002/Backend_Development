const express=require('express')
const router=express.Router()

//routed middleware
router.use((req,res,next)=>{
    console.log("Routed Middleware")
    next()
})
//homepage route
router.get('/',(req,res)=>{
    res.send("Blog Home Page")
})

//blog content page
router.get('/content',(req,res)=>{
    res.send("Blog Content Page")
})

//blog about page
router.get('/about',(req,res)=>{
    res.send("Blog About Page")
})

//Now that we have created the route for blog page, we need to create export for this route to be used by Request_Response_Route.js file.
module.exports=router