import multer from "multer";
import { nanoid } from "nanoid";



export const vvb={
    image:['image/png','image/jpeg'],
}


export const upload = (vvb)=>{
    
 const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, nanoid() + '-' + file.originalname)
    }
  })

  const fileFilter=(req,file,cb)=>{
    if(vvb.includes(file.mimetype)){
        cb(null,true)
    }else{
        cb('rrrr')
    }
  }
  
  const upload = multer({ storage,fileFilter })
return upload
}