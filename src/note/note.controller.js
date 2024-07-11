import Note from "../../database/models/note.js"
import asyncHandler from "../asyncHndeler.js"

export const addpost= asyncHandler (async(req,res)=>{

    req.body.createdBy=req.user._id
    const newNote= await Note.insertMany(req.body)
    newNote = 0
    return res.json({message:"done",newNote })

})


// export const getpost= async(req,res)=>{
//     const Allpost = await Post.find().populate('createdBy')
//     return res.json({message:"done",Allpost})
// }

