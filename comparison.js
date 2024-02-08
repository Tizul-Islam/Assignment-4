// console.log( 5 > 10);
// console.log( 5 < 10);
// console.log( 5 >= 10);
// console.log( 5 <= 10);
// console.log( 5 == 10);
// console.log( 5 != 10);
// console.log( 5 !== 10);
// console.log( 5 > 10);


// const salary = 10000;
// const money = 5000

// if(salary > money ){
//     console.log("Yes")
// }
// else{
//     console.log("No");
// }

// && AND
// if(salary > money && salary > 25000){
//     console.log("Yes")
// }
// else{
//     console.log("No");
// }

// || OR
/* if(salary > money || money > 1000 ){
    console.log("Yes")
}
else{
    console.log("No");
} */


/* const price = 104000;

    if(price >= 20000){
        //10 % discount
        const discount = price * 10 / 100 ;
        const disCountPrice = price - discount ;

        console.log("10 % " + disCountPrice);
    }
    else if(price >= 10000){
        //5 % discount
        const discount = price * 5 / 100 ;
        const disCountPrice = price - discount ;

        console.log("5 % " + disCountPrice);

    }
    else{

        console.log("0 % " + price )

    }
 */


age = 100;

/* if(age >= 20)
{
    console.log('voter');
}
else{
    console.log('voter na');
} */
//ternary oparator 
 //age >= 20 ? console.log('voter') : console.log('voter na')

 


 let price = 500;
 const Leader = false;
/*     if(Leader == true)
    {
        price = 0;
    }

else{
    price = price + 100;
}
console.log(price);
 */



/*   //ternary Oparator
 price = Leader == true ? 0 : price + 100 ;


if(Leader == true){
    if(price >1000){
        price = price / 2;
    }
    else {
        price = 0;
    }
}
else{
    price = price +1000;
}
 */

//ternary Oparator use (if ,else ) 
price = Leader == true ? 
                 price > 100 ? 
                 price / 2 :
                 0 :

                 price + 1000 ;

                 console.log (price)

                 //    : 0 : price +1000;