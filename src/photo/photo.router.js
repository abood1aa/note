import { Router } from "express";
import { AddPhoto } from "./photo.controller.js";
import { upload, vvb } from "../uploadFile.js";
import { getph } from "../photo/photo.controller.js";

 const route = Router()
 route.get('/getph',getph)



 route.post('/AddPhoto',upload(vvb.image).single('imageUrl'),AddPhoto)


 export default route