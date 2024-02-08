//no parameter  , not return

function num(){
console.log("no Number");

}

//no parameter ,but return
function num1(){
    return(5);
}

//parameter ,but no return
function num2(name){
    console.log(name)
}

//parameter ,return
function num4(x, y){
    return x + y;
}


//check the number is even and odd
function CheckNumber(x){
    if(x % 2 == 0){
        console.log("even")
    }
    else{
        console.log("odd")
    }
}
CheckNumber(5);


//koto bar output nibo 5 ber 
function inputName(x){
    for(let i = 0; i<=x; i++ )
    console.log("tizul")
}
inputName("5");