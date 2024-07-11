import mongoose from "mongoose";

const userScema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
        lowercase:true,
        trim:true
    },
    email:{
type:String,
required:true,
unique:true
    },
    password:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        enum:['male','female'],
        default:'male'
    },
    age:Number,
    isDelete:{
        type:Boolean,
        default : false
    },
    confirmEmail:{
        type:Boolean,
        default:false
    },
    code:{
type:Number
    }
},
{
    timestamps:true
})

const User = mongoose.model('User',userScema)

export default User