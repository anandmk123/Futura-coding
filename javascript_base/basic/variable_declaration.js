//without any keyword
variab="anand"
console.log(variab)

//using strict mode it is not possible to declare varible without any keyword
/*
"use strict"
variab="anand"
console.log(variab)*/

//var --> 
var a;
console.log(a) // print undefined 
var b=34;
var b=23; // can be redeclared 
console.log(b)//print 23

//let -->
let c;
console.log(c) // print undefined 
let d=12;
//let d=13; --> let can not be redeclared

//const -->
const e=12;
// e=14; --> not possible
console.log(e)
/*const f;
f=21*/ //error--> can not declare const variable without initialization
console.log(f)

