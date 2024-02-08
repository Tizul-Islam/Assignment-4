function sizeString(str){
    let size = str.length;
    console.log(str,size)

    if(size % 2 == 0){
        console.log("even")
        return true
    }
    else{
        console.log("Odd")
        return false
    }
}

sizeString("Dhaka");
sizeString("Bogura");
