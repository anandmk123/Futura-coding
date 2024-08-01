import { Router } from "express";
import cartController from "../Controllers/cart.controller.mjs";
const route=Router()

route.get('/status',cartController.handleStatus)
route.get('/getcartlist',cartController.handleGetCartList)
route.post('/addcart',cartController.handleAddCart)
route.delete('/deletecart/:id',cartController.handleDeleteCart)
route.patch('/update/:id',cartController.handleUpdateCart)
// route.patch('/update',cartController.handleUpdateCart)



export default route