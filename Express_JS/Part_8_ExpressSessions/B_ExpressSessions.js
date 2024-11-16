const express=require('express')
const session=require('express-session')
const app=express()

app.use(session({secret:"thisismysecret",resave:false,saveUninitialised:true}))


//Creating server side data object 'username' using session's 'req.session'
app.get('/register', (req, res) => {
    const { username = 'Anonymous' } = req.query;
    req.session.username = username;
    res.redirect('/greet')
})

//Accessing session serverside value using req.session
app.get('/greet', (req, res) => {
    const { username } = req.session;
    res.send(`Welcome back, ${username}`)
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})