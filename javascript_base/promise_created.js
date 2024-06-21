//This lets asynchronous methods return values like synchronous methods:instead of immediately returning the final value, 
//the asynchronous method returns a promise to supply the value at some point in the future.
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

//Fulfilled	Action related to the promise succeeded
//Rejected	Action related to the promise failed
//Pending	Promise is still pending i.e. not fulfilled or rejected yet
//Settled	Promise has been fulfilled or rejected