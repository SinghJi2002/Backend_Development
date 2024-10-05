const express=require('express')
const app=express()
const methodOveride=require('method-override')

app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')
app.use(methodOveride('_method'))

//First lets prepare our array database
let comments = [
    {
        id:1,
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id:2,
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id:3,
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        id:4,
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]

//This is the homescreen route
app.get("/",(req,res)=>{
    res.send("This is a CRUD on comments app")
})

//This is the view all comments route
app.get("/comments",(req,res)=>{
    res.render('commentsPage.ejs',{comments:comments})
})

//The next 2 are the add comments routes
//This sets us to the form to enter data
app.get("/comments/newComment",(req,res)=>{
    res.render('newComment.ejs')
})
//This handles the data entered
app.post("/comments",(req,res)=>{
    const {username,comment}=req.body
    comments.push({username,comment})

    //In place of res.send, we can add the comment and redirect to the updated comment page.
    //res.send("Comment Succesfull Added")
    res.redirect("/comments")
})

//The next route will take a specific id and show the corresponding comment
app.get("/comments/:id",(req,res)=>{
    const {id}=req.params
    res.render("show.ejs",{id:id,comments:comments})
})


//The next set of routes are there to work of patch request via which we can edit comments.
//The first route is to access form to edit text
app.get("/comments/:id/edit",(req,res)=>{
    const {id}=req.params
    let commentToSend;
    for(let comment of comments){
        if(id==comment.id){
            commentToSend=comment.comment
        }
    }
    res.render('edit.ejs',{id:id,comment:commentToSend})
})

//The next comment is to take the text in edit box, edit it, mount it over existing comment and edit it
app.patch("/comments/:id",(req,res)=>{
    const {commentEdit}=req.body//Name in the form and the name here should be the same
    const {id}=req.params
    for(let comment of comments){
        if(comment.id==id){
            comment.comment=commentEdit
            break
        }
    }
    res.redirect('/comments')
})

//Next we will be managing the delete routes
app.delete("/comments/:id",(req,res)=>{
    const {id}=req.params
    comments=comments.filter(c=>c.id!==id)
    res.redirect('/comments')
})



app.listen(3000,()=>{
    console.log("Port 3000 running")
})
