//include
let friend = ['anik' ,'ashik' , 'jabi' , 'salam' , 'joy']

console.log(friend.includes('aki'))  //value thakle true , na thakle false
console.log(friend.includes('anik'))


//value include ache naki oita check dewa jabe
if(friend.includes('jabi')){
    console.log("ache")
}
else{
    console.log("nai")
}


// indexOf khub besi important na
// console.log(friend.indexOf('jabi')) //thakle koto number index aceh oita bole dibe
// console.log(friend.indexOf('nai')) // na thakle (-1) index number dibe


//isarray = array value check korar jonno 

let num1 = [ 10,20,30]; // [10]
let num2 = ["abi",'jabi' ,'khabi' ]; // ['yes']
let num3 = 'tui ki jabi' ; // 'tui' not array

console.log(Array.isArray(num1))
console.log(Array.isArray(num2))
console.log(Array.isArray(num3))