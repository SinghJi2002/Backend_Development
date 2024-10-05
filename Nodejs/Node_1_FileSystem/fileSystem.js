const fileSystem=require('fs')

fileSystem.writeFile("hello.txt","Hello There!!",function(err){
    if(err){
        console.error(err.message);
    }
    else{
        console.log("file created");
    }
})
fileSystem.writeFileSync("helloSync.txt","Hello there!!")




fileSystem.appendFile("hello.txt","How are you doin?",function(err){
    if(err){
        console.error(err.message)
    }
    else{
        console.log("File appended")
    }
})
fileSystem.appendFileSync("helloSync.txt","How are you doin?")




fileSystem.rename("hello.txt","helloThere.txt",function(err){
    if(err){
        console.error(err.message)
    }
    else{
        console.log("Name changed")
    }
})
fileSystem.renameSync("helloSync.txt","helloThereSync.txt")





fileSystem.copyFile("helloThere.txt","./copyFile/helloThereCopy.txt",function(err){
    if(err){
        console.log(err.message)
    }
    else{
        console.log("File Copied")
    }
})
fileSystem.copyFileSync("helloThereSync.txt","./copyFile/helloThereSyncCopy.txt")






//Creating file to be deleted.
fileSystem.writeFileSync("Delete.txt","I am goinging to be deleted")
fileSystem.writeFileSync("Delete1.txt","I am goinging to be deleted")

//Deleting the file
fileSystem.unlink("Delete.txt",function(err){
    if(err){
        console.log(err.message)
    }
    else{
        console.log("File Deleted")
    }
})
fileSystem.unlinkSync("Delete1.txt")





fileSystem.rmdir("./DeleteDir",function(err){
    if(err){
        console.error(err.message)
    }
    else{
        console.log("Folder Deleted")
    }
})
fileSystem.rmdirSync("./DeleteDirSync")





fileSystem.mkdir("./NewFolder",function(err){
    if(err){
        console.error(err.message)
    }
    else{
        console.log("Folder Created")
    }
})
fileSystem.mkdirSync("./NewFolderSync")





fileSystem.readFile("helloThere.txt",'utf-8',function(err,data){
    if(err){
        console.error(err.message)
    }
    else{
        console.log(data)
    }
})
const data=fileSystem.readFileSync("helloThereSync.txt",'utf-8')
console.log(data)

fileSystem.readdir("./copyFile",function(err,data){
    if(err){
        console.error(err.message)
    }
    else{
        console.log(data)
    }
})
const data1=fileSystem.readdirSync("./copyFile")
console.log(data1)