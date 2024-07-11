import { Router } from "express";
import { logIn, signUp } from "./user.controller.js";

 const route = Router()
route.post('/signUp',signUp)
route.post('/logIn',logIn)
  

 export default route
