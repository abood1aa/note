import mongoose from "mongoose";

 const conected = ()=>{
  mongoose.connect('mongodb://localhost:27017/NoteSystem').then(()=>{
    console.log('DB conected');
  }).catch(()=>{
    console.log(" DB failed");
  })
}

export default conected