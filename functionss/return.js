function mark(number){
let result = number *10;
return result;
}
function exam(number){
    let time = number * 5;
    return time;
}
mark(20);

let markshit = mark(20);
console.log('markshit', markshit); 



// function even number
function value (number){
    if( number % 2 ==0){

        return true;
    }
    else {
        return false;
    }
}

console.log (value(2));
console.log (value(15));