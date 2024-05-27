//primitive data type - string,number,boolean,undefined,null
//primitive with const are immutable
const str1="anand"
//str1="ssxas"//error -can not change the value

//non-primitive type - object,array
//non-primitive with const are mutable
const user={name:"anand",age:56}
user.name="vis"  //no error
user.age=18 //no error
console.log(user.name +" " +user.age)

const arr=[2,3,4,5,1,8]
arr[0]=75
console.log(arr)
