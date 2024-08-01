import { v4 as idGenerator } from 'uuid';

let productList=[]

const handleStatus=(req,res)=>{
    return res.status(200).send({
        message:"Ok"
    })
}

const handleGetProductList=(req,res)=>{
    return res.status(200).send(productList)
}

const handleAddproduct=(req,res)=>{
    const productObject={...req.body,
        id:idGenerator(),
        createdAt:new Date().toLocaleString({timeZone: 'Asia/Kolkata'}),
        updatedAt:new Date().toLocaleString({timeZone: 'Asia/Kolkata'})
    }
    productList.push(productObject)
    return res.status(200).send(productList)
}

const handleDeleteProduct=(req,res)=>{
    const {id}=req.params
    productList = productList.filter(listItem => {
        if(listItem.id!=id){
            return listItem
        }
    })
    return res.status(200).send(productList)
}


const handleUpdateProduct=(req,res)=>{
    const {id} = req.body
    productList = productList.map(listItem => {
        if(listItem.id==id){
            return {...listItem,...req.body,updatedAt:new Date().toLocaleString({timeZone: 'Asia/Kolkata'})}
        }
        return listItem
    })
    return res.status(200).send(productList)
}

const getProductbody=(id)=>{
    let productbody
    productList.forEach(listItem => {
        if(listItem.id==id){
            productbody= listItem
        }
    })
    return productbody? productbody : null
}


export default {
    handleStatus,
    handleGetProductList,
    handleAddproduct,
    handleDeleteProduct,
    handleUpdateProduct,
    getProductbody
}