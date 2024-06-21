let str1="Anand m k unni"
console.log(str1.length) //Length of string

let str2="Anand m k unni"
console.log(str2.charAt(2)) //returns the character at a specified index (position) in a string:

console.log(str2.at(4)) //returns the character at a specified index (position) in a string.
console.log(str2.at(-4)) //It allows the use of negative indexes while charAt() do not.

let str3="Anand m k unni"
str3[4]='v' // // Gives no error, but does not work. Can not change the value
console.log(str3) //

console.log(str3.slice(2,6)) //extracts a part of a string and returns the extracted part in a new string.
console.log(str3.slice(6))

console.log(str3.substring(2,11)) //similar to slice()

console.log(str3.substr(2,11)) //similar to slice(). start from index 2 and slice next 11 characters

let text1="anand M k a"
console.log(text1.toLocaleUpperCase()) //UpperCase
console.log(text1.toLocaleLowerCase()) //LowerCase

let text2 ="Hello";
let text3 ="World";
let text4=text2.concat("+",text3) //The concat() method can be used instead of the plus operator.
console.log(text4)

