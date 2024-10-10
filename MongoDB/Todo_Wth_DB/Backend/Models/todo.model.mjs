import { model, Schema } from "mongoose";

const todoSchema= new Schema({
    Name:{
        type:String,
        required : true
    },
    Age:{
        type:Number,
        required:true
    },
    Place : {
        type:String,
        required:false
    }
},
{
    timestamps:true
}
)

export const todoModel = model("todos",todoSchema)
