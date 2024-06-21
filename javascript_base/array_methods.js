let arr=['Red','Green','blue','black']
console.log(arr.length) //length of array

console.log(arr.toString()) //converts an array to a string of (comma separated) array values.

console.log(arr.at(2)) // arr[2]

console.log(arr.join("*")) // joins all array elements into a string.It behaves just like toString(), but in addition you can specify the separator:

let arr1=[2,3,4,5,6,7,9,0]
console.log(arr1.pop()) //removes the last element from an array. returns the value that was "popped out":
console.log(arr1)

let arr2=[3,4,66,21,75,3]
let len=arr2.push(34) //The push() method adds a new element to an array (at the end). The push() method returns the new array length:
console.log(arr2)
console.log(len)

let arr3=[5,6,2,1,9,2,44]
delete arr3[1] //Using delete() leaves undefined holes in the array.
console.log(arr3[1]) 

let a1=[3,4,5,6]
let a2=[7,8,9,10]
let a3=a1.concat(a2) //The concat() method creates a new array by merging (concatenating) existing arrays.method does not change the existing arrays. It always returns a new array.
console.log(a3)

let b1=['a','b','c','d']
b1.splice(1,2,'e','f') //can be used to add new items to an array. start from index-1 and add two new values and remove two
console.log(b1)

let b2=[4,5,6,7,8]
b2.splice(2,3) //use splice() to remove elements without leaving "holes" in the array. From index 2 remove three elements
console.log(b2)

let b3=[6,7,8,9,10,11,12,13]
let b4=b3.slice(2,4) //slices out a piece of an array into a new array.creates a new array.method does not remove any elements from the source array.

console.log(b4)

