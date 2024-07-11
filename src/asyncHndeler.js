
 
 const asyncHandler =(ff)=>{
return(req,res,next)=>{
    ff(req,res,next).catch((error)=>{
        return res.json({message:"catch erorr",error:error.message})
    })
}
 }
 export default asyncHandler