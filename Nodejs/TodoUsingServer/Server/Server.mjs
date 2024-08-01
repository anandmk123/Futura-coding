import http from 'http'
import url from 'url'
const app = http.createServer()
let list = []

app.on('request', (req, res) => {

    const parts = url.parse(req.url, true) // url is used to get query
    const path = parts.pathname //get the path
    const query = parts.query // get the query

    //create,update,delete,read items into a list--> Get,post,update

    if (path == '/addtask') {
        const { id,task } = query
        const item={id:id,task:task}
        list.unshift(item)
        res.writeHead(200, { "Content-Type": "application/json" })
        return res.end(JSON.stringify(list))
    }
    if (path == '/read') {
        res.writeHead(200, { "Content-Type": "application/json" })
        return res.end(JSON.stringify(list))
    }

    if (path == '/update') {
        const { id, task } = query
        list = list.map(listItem => {
            if(listItem.id==id){
                return {id:id,task:task}
            }
            return listItem
        })
        res.writeHead(200, { "Content-Type": "application/json" })
        return res.end(JSON.stringify(list))
    }

    if (path == '/delete') {
        const {id} = query
        list = list.filter(listItem => {
            if(listItem.id!=id){
                return listItem
            }
        })
        res.writeHead(200, { "Content-Type": "application/json" })
        return res.end(JSON.stringify(list))
    }

})



app.listen(8081, (err) => {
    if (err) process.exit(1)
    console.log("Server Running......")
})