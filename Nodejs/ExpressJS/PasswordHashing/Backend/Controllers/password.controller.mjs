//bcrypt -- used for hashing
import bcrypt from 'bcrypt'

const handleStatus=(req,res)=>{
    return res.status(200).send({
        message:"Ok"
    })
}

const handleGenerateHash=async (req,res)=>{
    try {
        const { password } = req.body
        const hashedPassword = await bcrypt.hash(password,10) // it is a promise. That is why used aysnc and await 
        return res.status(201).send({ //201-->generated
            message:"Password hashed successfully",
            hashedPassword:hashedPassword
        })
        
    } catch (error) {
        return res.status(500).send({
            message:error.message || 'Internal Server Error'

        })
    }
}

const handleValid=async (req,res)=>{
    try {
        const {password,hashedPassword} = req.body
        const isValid= await bcrypt.compare(password,hashedPassword)
        if(isValid){
            return res.status(200).send(
                {
                    message:"Password is valid",
                    result:isValid
                }
            )
        }
        else{
            return res.status(400).send(
                {
                    message:"Password is not valid",
                    result:isValid
                }
            )
        }
        
    } catch (error) {
        return res.status(500).send({
            message:error.message || 'Internal Server Error'
        })
    }

}


export default {
    handleStatus,
    handleGenerateHash,
    handleValid
}