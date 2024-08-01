import http from 'http'

const app =http.createServer()

app.on('request',(req,res)=>{
    const path=req.url
    if(path=='/'){
        //write the head
        res.writeHead(200,{"Content-Type":"application/json"})
        //write the resppnse
        res.write(JSON.stringify({name:'Anand',age:23}))
        return res.end()
    }
    if(path=='/profile'){
        //write the head
        res.writeHead(200,{"Content-Type":"application/json"})
        //write the resppnse
        res.write(JSON.stringify({name:'Unni',age:25}))
        return res.end()
    }

})


app.listen(8080,(err)=>{
    if(err) process.exit(1)
    console.log("Server Running......")

})