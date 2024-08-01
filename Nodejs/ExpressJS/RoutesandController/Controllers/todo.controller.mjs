const handleStatus=(req,res)=>{
    return res.status(200).send({
        message:"Ok"
    })
}

export default {
    handleStatus
}