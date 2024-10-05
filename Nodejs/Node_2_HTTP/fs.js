const fs=require("fs")//fs is a module just like slugify was
console.log(fs)

//Writing into a file. There are two ways to do it. One is using writeFileSync which makes the write command synchornous. Other is writeFile which performs the write operation in a asynchronous manner.

console.log("Starting to write")
fs.writeFileSync("ashu.txt","Ashutosh is a boy",()=>{
    console.log("sync done")
})//Good point to know is that callback is not allowed to happen in synchronous elements.
fs.writeFile("akansha.txt","akanshsa is a girl",()=>{
    console.log("async done")
})


//Reading files. It can also be done using two functions that is readFile and readFileSync. Addtional information regarding readFile is the special structure of its callback that takes 2 arguments, error and data. Note that data is in numeric format so its need to be converted to string.
fs.readFile("akansha.txt",(error,data)=>{
    console.log(error)
    console.log(data.toString())
})
console.log(fs.readFileSync("ashu.txt","utf-8"))//utf-8 encoding is specifically mentioned to covert numbers to string
console.log("Ending to write")


//There is also the append operation and as guessed it also provides 2 operations. appendFile and appendFileSync.
fs.appendFile("akansha.txt",". I am in STD 11.",(e,d)=>{
    console.log(d)//Null is being printed.
})

fs.appendFileSync("ashu.txt",". I am in 3rd B.Tech.")
//Read operation for the append.
console.log(fs.readFileSync("ashu.txt","utf-8"))

//Now there is something called callback hell. It happens when multiple async elements are placed into one another. Here is an illustration.



//One way to counter callback hell is via promises. For this optionally we are changing the type of json to module. See the next file "main2.js"
