import productController from "./product.controller.mjs";

let cartList=[]

const handleStatus=(req,res)=>{
    return res.status(200).send({
        message:"Ok"
    })
}

const handleGetCartList=(req,res)=>{
    return res.status(200).send(cartList)
}

const handleAddCart=(req,res)=>{
    const {id}=req.body
    let flag=true
    cartList.forEach(ele=>{
        if(ele.id==id){
            flag=false
            return res.status(400).send({
                message:"Item already exists in cart"
            })
        }
    })
    if(flag){
        cartList.push(req.body)
        return res.status(200).send(cartList)
    }

}

const handleDeleteCart=(req,res)=>{
    const {id}=req.params
    cartList = cartList.filter(listItem => {
        if(listItem.id!=id){
            return listItem
        }
    })
    return res.status(200).send(cartList)
}

const handleUpdateCart=(req,res)=>{
    const {id} = req.params
    const productbody=productController.getProductbody(id)
    cartList = cartList.map(listItem => {
        if(listItem.id==id){
            return {...productbody,updatedAt:new Date().toLocaleString({timeZone: 'Asia/Kolkata'})}
        }
        return listItem
    })
    return res.status(200).send(cartList)
}

// const handleUpdateCart=(req,res)=>{
//     const {id} = req.params
//     const productbody=productController.getProductbody(id)
//     cartList = cartList.map(listItem => {
//         if(listItem.id==id){
//             return {...productbody,updatedAt:new Date().toLocaleString({timeZone: 'Asia/Kolkata'})}
//         }
//         return listItem
//     })
//     return res.status(200).send(cartList)
// }

export default {
    handleStatus,
    handleGetCartList,
    handleAddCart,
    handleDeleteCart,
    handleUpdateCart
}