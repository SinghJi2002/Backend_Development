const http= require('http')
const server=http.createServer(function(req,res){
    res.send("Hello There")
})
server.listen(3000)