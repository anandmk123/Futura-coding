import fs from 'fs'

const content='let a=3'+'\n'+'console.log(a)'+'\n'

fs.writeFile('./fsFile/samplejava.js',content,'utf-8',(err)=>{
    if(err) console.log(err)
})

const appendContent='let b=3'+'\n'+'console.log(b)'+'\n'
fs.appendFile('./fsFile/samplejava.js',appendContent,'utf-8',(err)=>{
    if(err) console.log(err)
})

fs.readFile('./fsFile/samplejava.js','utf-8',(err,data)=>{
    if(err) return console.log(err)
    console.log(data)
})
