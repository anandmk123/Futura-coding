const array =[23,45,67,12,'asn','fsaa','waaa',undefined,true,false,34,[1,2,3],{username:'anand'},null,null,[],{}]

function findNumberofTypes(array){
    let num_count=0;
    let str_count=0;
    let bool_count=0;
    let undef_count=0;
    let array_count=0;
    let object_count=0;
    let null_count=0;

    array.forEach(element => {
        if(element===null)
            null_count++;
        else if(Array.isArray(element))
            array_count++;
        else if(typeof(element)==='object')
            object_count++;
        else if(typeof(element)==='number')
            num_count++;
        else if(typeof(element)==='string')
            str_count++;
        else if(typeof(element)==='undefined')
            undef_count++;
        else if(typeof(element)==='boolean')
            bool_count++;
    });

    console.log("Number of numbers = " + num_count)
    console.log("Number of strings = " + str_count)
    console.log("Number of boolean = " + bool_count)
    console.log("Number of undefined = " + undef_count)
    console.log("Number of array = " + array_count)
    console.log("Number of object = " + object_count)
    console.log("Number of null = " + null_count)
}
findNumberofTypes(array)
