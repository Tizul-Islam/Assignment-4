function deleteInvalids(arr) {
   
    if (!Array.isArray(arr)) {
        return "error message";
    }    
    
    let validNumber =[];
    for(let i = 0; i <arr.length; i++){
        if(typeof arr[i] == 'number' && !isNaN(arr[i])){

            validNumber.push(arr[i])
        }
    }
    return validNumber;
}


console.log(deleteInvalids([NaN, 1, 12, 0, -1, undefined])); 