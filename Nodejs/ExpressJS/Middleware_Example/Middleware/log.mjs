//costum middleware on otherfile
//Implement the morgan by us
export const requestLog=(req,res,next)=>{
    const startTime=new Date().getTime()//Time in millisecond
    const path=req.url
    const method=req.method
    res.on("finish",()=>{
        const endTime=new Date().getTime()//Time in millisecond
        const timeTaken=endTime-startTime
        const statusCode=res.statusCode
        console.log(method,path,statusCode,`${timeTaken} ms`)
    })
    next()
}
