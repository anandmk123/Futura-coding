//deep copy using spread and rest operator
//spread and rest is also applicable for array
const customer={username:'anand',age:23,class:"btech",eligible:true}
//spread --> give the operator as first element
//spread--> we can copy and change the value at same time. Also we can add new fields to object 
const customer1={...customer,username:"unni",eligible:!customer.eligible,mobile:"9645405886"}//mobile is newly added
console.log(customer)
console.log(customer1)

const user={username:'anand',age:23,class:"btech",eligible:true}
//rest--> give the oprator as last element
//rest--> The element will be replaced by last deep copeied element. Any new field can be added
const user1={username:"unni",age:19,mobile:921,...user} // mobile is added newly.
console.log(user)
console.log(user1)


