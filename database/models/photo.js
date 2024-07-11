import mongoose, { Schema } from "mongoose";

const photoScema=new Schema({
    title:String,
    imageUrl:String
},
{
    timestamps:true
})
photoScema.post('init',(doc)=>{
    doc.imageUrl= 'http://localhost:3000/uploads/' + doc.imageUrl
})

const Photo = mongoose.model('Photo',photoScema)
export default Photo