let arr=[1,2,3,4,5,6,0,12,9,20,10,5]

let mapresult = arr.map(ele=>{
    if(ele>8)
        return ele
}
)
console.log(mapresult) // Always return array of same length. Element which is not satisfied the condition will be stored as undefined

let filterresult = arr.filter(ele=>{
    if(ele>8)
        return ele
})
console.log(filterresult) // return the array with defined values. All undefined will be removed

let reduceresult=arr.reduce((acc,cur)=>{
    acc=acc+cur
    return acc
},0)
console.log(reduceresult)
//executes a reducer function for each array element, returning a single accumulated value.