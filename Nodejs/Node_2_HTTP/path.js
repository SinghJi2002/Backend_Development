import path from "path"

let myPath="D:\\Backend_Development\\Part_3\\akansha.txt"
console.log(path.extname(myPath))//Returns the extension of requested file.

console.log(path.dirname(myPath))//Returns the directory of required file.

console.log(path.basename(myPath))//Returns the file name in the mentioned path.

console.log(path.join("D:\\","Frontend_Development\\Project_Spotify"))//Returns new combined file.
