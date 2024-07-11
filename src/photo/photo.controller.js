import Photo from "../../database/models/photo.js"



export const AddPhoto=async(req,res,next)=>{
    req.body.imageUrl=req.file.filename
    const pop=await Photo.create(req.body)
    return res.json({messga:"done",pop})

}

export const getph =async(req,res,next)=>{
    const get = await Photo.find()
    return res.json({messga:"done",get})

}