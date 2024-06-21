const user={name:'anand',age:23,class:"btech"}

//shallow copy 
const user1=user // both user and user1 will change
user1.name='unni'
console.log(user) 
console.log(user1)

//deep copy--> using json or spread/rest operator
const customer={name:'anand',age:23,class:"btech"}
const costomer1=JSON.parse(JSON.stringify(customer))
costomer1.name='unni'// only costomer1 will change
console.log(customer) 
console.log(costomer1)