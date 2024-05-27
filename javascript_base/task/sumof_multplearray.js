const array=[23,1,53,[23,67,21],2,87,3,[2,3,5,6,7]]

function arraysum(array){
    let sum=0;
    array.forEach(element => {
        if(Array.isArray(element)){
            element.forEach(el=>{
                sum=sum+el
            })
        }
        else
            sum=sum+element
    });
    console.log("sum= "+sum)
}
arraysum(array)