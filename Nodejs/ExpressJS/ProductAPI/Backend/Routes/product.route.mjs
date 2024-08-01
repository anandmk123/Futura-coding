import { Router } from "express";
import productController from "../Controllers/product.controller.mjs";

const route=Router()

route.get('/status',productController.handleStatus)
route.get('/getproductlist',productController.handleGetProductList)
route.post('/addproduct',productController.handleAddproduct)
route.delete('/deleteproduct/:id',productController.handleDeleteProduct)
route.patch('/update',productController.handleUpdateProduct)


export default route