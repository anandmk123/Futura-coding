const array =[23,45,67,12,'asn','fsaa','waaa',undefined,true,false,34]

function findNumberofTypes(array){
    let num_count=0;
    let str_count=0;
    let bool_count=0;
    let undef_count=0;
    for(let i=0;i<array.length;i++){
        if(typeof(array[i])=='number')
            num_count+=1;
        if(typeof(array[i])=='string')
            str_count+=1;
        if(typeof(array[i])=='boolean')
            bool_count+=1
        if(typeof(array[i])=='undefined')
            undef_count+=1
    }
    console.log("Number of numbers = " + num_count)
    console.log("Number of strings = " + str_count)
    console.log("Number of boolean = " + bool_count)
    console.log("Number of undefined = " + undef_count)
}
findNumberofTypes(array)
