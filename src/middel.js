import jwt from "jsonwebtoken"


const sinnn=(req,res,next)=>{
    const tokeen= req.headers.schema
    const tolee=tokeen.split('mohdaaa__')[1]
    const paylod= jwt.verify(tolee,'mohdaa');
    if(!paylod){
        return res.json({message:"babab mafesh data"})

    }
    req.user=paylod
    next()
}

export default sinnn