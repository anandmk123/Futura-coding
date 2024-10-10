import { connect } from "mongoose"

export const config = async () =>{
    try {
        const result = await connect(process.env.DB_URL)
        console.log("Connected DB : ",result.connection.db.databaseName)
        
    } catch (error) {
        return  console.log(error.message) 
    }
}