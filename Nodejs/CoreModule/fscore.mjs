import { on } from 'events'
import fs from 'fs'

//create a file
fs.writeFile('./fsFile/sample.txt','This is sample data','utf-8',(err)=>{
    if(err) console.log(err)
})

// //append to a file
fs.appendFile('./fsFile/sample.txt',' this is appened data','utf-8',(err)=>{
    if(err) console.log(err)
})


fs.readFile('./fsFile/sample.txt','utf-8',(err,data)=>{
    if(err) return console.log(err)
    console.log(data)

})

//delete a file
fs.unlink('./fsFile/sample.txt',(err)=>{
    if(err) return console.log(err)
    console.log('success')
})


//read and write as chuncks
const readStream=fs.createReadStream('./fsFile/stream.txt',{encoding:'utf-8'})
const writeStream=fs.createWriteStream('./fsFile/result.txt',{encoding:'utf-8'})

readStream.on('data',(data)=>{
    writeStream.write('chunk'+data)
})

readStream.on('error',(err)=>{
    console.log(err)
})

readStream.on('end',()=>{
    console.log('completed')
})

//pipe
const readStream2=fs.createReadStream('./fsFile/pipestream.txt',{encoding:'utf-8'})
const writeStream2=fs.createWriteStream('./fsFile/piperesult.txt',{encoding:'utf-8'})
readStream2.pipe(writeStream2)

