import mongoose from "mongoose";

const noteScema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        minlength:3,
        maxlength:1000, 
    },
    desc:{
        type:String,
        required:true,
        minlength:3
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        required:true,
        ref:'User'
    }


})

const Note = mongoose.model('Note',noteScema)

export default Note