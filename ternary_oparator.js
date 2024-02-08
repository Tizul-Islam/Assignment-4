
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

 price = Leader == true ? price >1000 ? price / 2 : 0 : price +1000 ;
console.log (price);

/*

/// ternary oparator 
price = Leader == true ? 
                price > 100 ? 
                price / 2 :
                0 :

                price + 1000 ;

                console.log (price)

                //    : 0 : price +1000; */