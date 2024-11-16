const express=require('express')
const app=express()
const bcrypt=require('bcrypt')

//This is the function that we will use for encryption. This function intially takes the word that need to be encrypted.
const encryptionFunction= async (word)=>{

    //Then salt is generated for that word.
    const salt=await bcrypt.genSalt(10)

    //Encryption is generated for that word and the salt added to it
    const hash=await bcrypt.hash(word,salt)
    
    //We print hash and salt
    console.log(`The encrypted hash is ${hash}`)
    console.log(`The generated salt is ${salt}`)
}

encryptionFunction('password')
