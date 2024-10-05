# Node.js

Node.js is not programming language, technology, framework or library but its a JS run time environment.

Note that Javascript alone as a language cannot create backend server. Hence to help it being capable to form backend server, A programmer took __v8 Chorme Engine__ which is programmed in C++, wrote a JS wrapper around it, and it gave birth to Node.js. Hence Node.js is combination of v8 Engine which is capable of creating backend, and JS wrapper that converts the JS code we write to something that is executable by this engine. But since the server created functions until Node.js is running, its calld a run time env.

## Installing Node.js and NPM

Before installing, What is NPM?

NPM is a collection of pakages(pre-written code) that can be borrowed by us to perform tasks as per our need.

To install Node.js, we can download it from its website.

To install NPM, take cmd and enter the code,

    npm init -y

## How to work with them after installation?

* Create a .js file in your code editor.
* Install npm. When npm will be installed, it will create a pakage.json file. This file is nothing but the summary of everything in our node.js file with which we are working.
* Now when coding we have 2 templates with which we can code in. CommonJS and EJS. Currently we will be using CommonJS. Note that Node.js consists of many modules or pakages integrated into it. This is how we import them using CommonJS template.

```
const variable=require('module_name')
```

### File System Module Of Node.js

To import the file system module, use the following code,

```javascript
const fileSystem=require('fs')
```

Now the next operation will be to use this module perform the actions that it provides. Lets first talk about,

#### writeFile

The general syntax of writing the code is,

```js
    fs.writeFile("FileName","FileContent","Function to Handle Errors")
```

Creates a file with the file name and stores data into it.

#### writeFileSync

The general syntax of writing the code is,

```js
    fs.writeFileSync("FileName","FileContent",)
```

Creates a file with the file name and stores data into it.Note that synchronous operations do not allow callbacks.

#### appendFile

The general syntax of writing the code is,

```js
    fs.appendFile("FileName","FileContent","Function to Handle Errors")
```

Appends data into a already existing file.

#### appendFileSync

The general syntax of writing the code is,

```js
    fs.appendFileSync("FileName","FileContent",)
```

Appends data into a already existing file.Note that synchronous operations do not allow callbacks.

#### rename

The general syntax of writing the code is,

```js
    fs.rename("FileName","New FileName","Function to Handle Errors")
```

Changes the name of the file.

#### renameSync

The general syntax of writing the code is,

```js
    fs.renameSync("FileName","New FileName",)
```

Changes the name of the file.Note that synchronous operations do not allow callbacks.


#### copyFile

The general syntax of writing the code is,

```js
    fs.copyFile("FileNameWhoseCopyIsToBeCreated","Directory/NameOfFileCopy","Function to Handle Errors")
```

Creates a copy of the file.

#### copyFileSync

The general syntax of writing the code is,

```js
    fs.copyFileSync("NameOfFileToBeCopied","Directory/CopyFileName")
```

Changes file name.Note that synchronous operations do not allow callbacks.

Note that the directory should already be existing of error will be produced.

#### unlink

The general syntax of writing the code is,

```js
    fs.unlink("NameAndDirectoryOfFileToBeDeleted","Function to Handle Errors")
```
Deletes the created files.

#### unlinkSync

The general syntax of writing the code is,

```js
    fs.unlinkSync("NameAndDirectoryOfFileToBeDeleted")
```

Deletes created file.Note that synchronous operations do not allow callbacks.

Note that the directory should already be existing of error will be produced.


#### rmdir
The general syntax of writing the code is,

```js
    fs.unlink("PathOfTheFolderToBeDeleted","Function to Handle Errors")
```
Deletes the created folders.

#### rmdirSync

The general syntax of writing the code is,

```js
    fs.rmdirSync("PathOfFolderToBeDeleted")
```

Deletes created folder.Note that synchronous operations do not allow callbacks.

Note that the directory should already be existing of error will be produced.

#### mkdir
The general syntax of writing the code is,

```js
    fs.unlink("PathOfTheFolderToBeCreated","Function to Handle Errors")
```
Creates the new folders.

#### mkdirSync

The general syntax of writing the code is,

```js
    fs.mkdirSync("PathOfFolderToBeCreated")
```

Creates new folder.Note that synchronous operations do not allow callbacks.

Note that the directory should already be existing of error will be produced.

#### readFile
The general syntax of writing the code is,

```js
    fs.readFile("PathAndNameOfTheFileToBeRead", "Encoding","Function to Handle Errors")
```
Reads the content of file.

#### readFileSync

The general syntax of writing the code is,

```js
    fs.readFileSync("PathAndNameOfFileToBeRead", "Encoding")
```

Reads content of file.Note that synchronous operations do not allow callbacks.

Note that the directory should already be existing of error will be produced.


#### readdir
The general syntax of writing the code is,

```js
    fs.readdir("PathAndNameOfTheFolderToBeRead","Function to Handle Errors")
```
Reads the content of folder.

#### readdirSync

The general syntax of writing the code is,

```js
    fs.readdirSync("PathAndNameOfFolderToBeRead")
```

Reads content of folder.Note that synchronous operations do not allow callbacks.

Note that the directory should already be existing of error will be produced.

### HTTP Module of Node.js

Note when we do anything on internet we do it by following certain rules. These rules come preinstalled in OS of our device and web browers while interacting with internet use these rule and follow them while interacting. HTTP is one of those protocols/rules. Without following it, we cannot send/recieve data from internet.

HTTP module in Node.js is used to create server. The code is as follows

```js
const http=require('http')
const server=http.createServer(function(req,res){
    res.send("Hello There")
})
server.listen(3000)
```