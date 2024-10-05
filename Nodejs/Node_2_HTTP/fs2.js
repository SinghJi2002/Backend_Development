import fs from "fs/promises"

//Note promises module can also be used in commonJS settings

//In import method we do need async to perform await. We can directly perform await operation.

let a=await fs.writeFile("akshay.txt","I am akshay")
let b=await fs.readFile("akshay.txt")
let c=await fs.readFile("ashu.txt")
console.log(b.toString())
console.log(c.toString())

//View next file for watching introduction to path module.