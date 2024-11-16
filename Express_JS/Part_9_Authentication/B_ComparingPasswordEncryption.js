const express=require('express')
const app=express()
const bcrypt=require('bcrypt')

async function main(){
    //Creating hashed password
    async function hashing(password){
        const salt= await bcrypt.genSalt(10)
        const hashing=await bcrypt.hash(password,salt)
        return(hashing)
    }

    const encryption=await hashing('password')

    //Comparing hash password and word password
    async function checkPassword(password,encryption){
        const same=await bcrypt.compare(password,encryption)
        return(same)
    }
    const isSame=await checkPassword('password',encryption)

    //Printing the verdict
    if(isSame){
        console.log("Password are correct")
    }
    else{
        console.log("Password are not correct")
    }
}
main()