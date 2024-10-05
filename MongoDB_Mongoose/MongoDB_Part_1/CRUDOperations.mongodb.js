//Creating a database.
use("This_Is_Sample_Database")

//Creating a collection
db.createCollection("This_Is_Sample_Collection")

//Entering data into the collections. On at a time.
db.This_Is_Sample_Collection.insertOne({
    Name:"Ashutosh Kumar Singh",
    Roll:22052974,
    Marks:100
})

//Entering data into the collections. Many at a time.
db.This_Is_Sample_Collection.insertMany([
    {
        Name:"Divyansh Bajpai",
        Roll:22052980,
        Marks:100
    },
    {
        Name:"Ashish Kumar",
        Roll:22052888,
        Marks:90
    },
    {
        Name:"Dikshant Sawaran",
        Roll:22053157,
        Marks:100
    }
])

//Reading document from collection. Many at a time.
db.This_Is_Sample_Collection.find({Marks:100})

//Reading document from collection. One at a time.
db.This_Is_Sample_Collection.findOne({Marks:100})//Prints the first matching datapoint only.


//Updating document from collection. One at a time.
db.This_Is_Sample_Collection.updateOne({Name:"Ashutosh Kumar Singh"},{$set: {Roll:22052975}})//The first argument is filter and the second the updation u want to make.

//Updating document from collection. Many at a time.
db.This_Is_Sample_Collection.updateMany({Marks:100},{$set:{Marks:85}})  

//Deleting a document from collection. One at a time.
db.This_Is_Sample_Collection.deleteOne({Marks:85})

//Deleting a document from collection. Many at a time.
db.This_Is_Sample_Collection.deleteMany({Marks:85})

//Using the $lt $gt $lte and $gte in mongo search engine
db.This_Is_Sample_Collection.find({Marks:{$gt:80}})

//Using $in in mongo search engine
db.This_Is_Sample_Collection.find({Roll:{$in:['22052974','22053157']}})

//Using $or in mongo search engine
db.This_Is_Sample_Collection.find($or:[{Marks:100},{Name:"Ashutosh Kumar Singh"}])

//Please study query and projection operator from the link below.
//https://www.mongodb.com/docs/manual/reference/operator/query/