
import jwt from "jsonwebtoken"
import User from "../../database/models/user.js"
import bcrypt from 'bcrypt'
import { customAlphabet, nanoid } from "nanoid"
import sendEmail from "../utils/SendEmail.js"



//get data 
//chek if email existe
//hash
//inser
export const signUp = async(req,res)=>{
try {
    const { email,password}= req.body
const buser= await User.findOne({email})
if(buser){
    return res.json({message:"email aready existed"})
}
req.body.password = bcrypt.hashSync(password,8)
const code =customAlphabet('0123456789',4)
req.body.code=code()
const newuser = await User.insertMany(req.body)
sendEmail({to:email,html:`<h1>${req.body.code}</h1>`})
console.log(newuser);
return res.json({message:"done",newuser})

    
} catch (error) {
    return res.json({message:"catch erorr",error})

}

}


export const logIn = async(req,res)=>{
    try {
        const {email,password}= req.body
    const user= await User.findOne({email})
    console.log(user);
    if(!user){
        return res.json({message:"invalid email or passwrod"})
    }
    const match = bcrypt.compareSync(password,user.password)
    console.log(match);
if(!match){
    return res.json({message:"invalid email or passwrod"})
}
const token = jwt.sign({email,_id:user._id},'mohdaa')
    return res.json({message:"done",token })
    
        
    } catch (error) {
        return res.json({message:"catch erorr",error})
    
    }
    
    }