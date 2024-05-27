const array=[12,1,5,[10,12,[3,5,1,3],2],2,8,3,[2,3,5,[2,4,2,5],6,7,[20,40,[10]]],67]

function arraysum(array){
    let sum=0
    array.forEach(element => {
        if(Array.isArray(element)){
            sum=sum+arraysum(element)
        }
        else{
            sum=sum+element
        }
    });
    return sum;
}
let sum=arraysum(array)
console.log("Sum = "+ sum)
