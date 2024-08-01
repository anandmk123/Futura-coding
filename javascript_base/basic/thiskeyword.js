//this keyword --> Variable created for every execution context(every function including global execution context). 
//Value of the this keyword for each function always defined based on where the function is getting called or who is calling that function

//this keyword in global scope--> points to the window object
console.log(this);

//Regular Function in global execution context--> points to the window object in normal mode (points to undefined in strict mode)
function Regular(){
    console.log('Regular function call')
    console.log(this);
}
Regular() 

//Method(function inside an object) --> points to the object on which that method is called 
let Anand={
    name:'Anand',
    year:1999,
    calculateAge(birthyear){
        console.log(this.name) 
        console.log(2024-birthyear)
        console.log(2024-this.year)
        console.log(this) 
    }
}
Anand.calculateAge(1999) // this variable points to the Anand Object

let Shelna={
    name:'Shelna',
    year:1992,
}
Shelna.calculateAge=Anand.calculateAge
Shelna.calculateAge(1992)//this variable points to the Shelna Object