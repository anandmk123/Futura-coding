const promise_example=(num)=>{
    return new Promise((resolve,reject)=>{
        if(num%2===0){
            resolve('sucsess')
        }
        else{
            reject('failed')
        }
    })
}

promise_example(4)
.then((result)=>{console.log(result)})
.catch((err)=>{console.log(err)})