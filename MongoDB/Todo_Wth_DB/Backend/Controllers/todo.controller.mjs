import { todoModel } from "../Models/todo.model.mjs";

const createDoc = async (req, res) => {
    try {
        const body = req.body;
        if (!body.Name || !body.Age) return res.status(400).send({
            message: "Name and Age are required"
        })

        const result = await todoModel.create(body)
        return res.status(200).send({
            result:result
        })

    } catch (error) {
        return res.status(500).send({
            message:"Internal Server Error"
        }) 
    }
}


const readDoc = async (req, res) => {
    try {
        const result = await todoModel.find()
        return res.status(200).send({
            result:result
        })

    } catch (error) {
        console.error(error.message)
        return res.status(500).send({
            message:"Internal Server Error"
        }) 
    }
}

const readDocById = async (req, res) => {
    try {
        const { id } = req.query
        const result = await todoModel.findOne({
            _id:id
        })
        return res.status(200).send({
            result:result
        })

    } catch (error) {
        console.error(error.message)
        return res.status(500).send({
            message:"Internal Server Error"
        }) 
    }
}

const deleteDocById = async (req, res) => {
    try {
        const { id } = req.query
        const result = await todoModel.deleteOne({
            _id:id
        })
        return res.status(200).send({
            result:result
        })

    } catch (error) {
        console.error(error.message)
        return res.status(500).send({
            message:"Internal Server Error"
        }) 
    }
}

const updateDocById = async (req, res) => {
    try {
        const { id,...body } = req.body
        const result = await todoModel.updateOne({
            _id:id
        },{
            $set:body
        })
        return res.status(200).send({
            result:result
        })

    } catch (error) {
        console.error(error.message)
        return res.status(500).send({
            message:"Internal Server Error"
        }) 
    }
}

const filterDocByAge = async (req, res) => {
    try {
        const result = await todoModel.find({
            $and:[{Age:{$gte:22}},{Age:{$lte:35}}]
        }).sort({Age:1}) // sort=1 ==> Sort by ascending  && sort=-1 ==> Sort by descending 
        return res.status(200).send({
            result:result
        })

    } catch (error) {
        console.error(error.message)
        return res.status(500).send({
            message:"Internal Server Error"
        }) 
    }
}

const searchDocByName = async (req, res) => {
    try {
        const {search}=req.query
        const result = await todoModel.find({
            Name:{
                $regex : search,
                $options : "i"  // case insensitive search  "i" means ignore the case
            }
        })
        return res.status(200).send({
            result:result
        })

    } catch (error) {
        console.error(error.message)
        return res.status(500).send({
            message:"Internal Server Error"
        }) 
    }
}

export default {
    createDoc,
    readDoc,
    readDocById,
    deleteDocById,
    updateDocById,
    filterDocByAge,
    searchDocByName
}
