const mobile = {

    brand : 'apple',
    price :  2000,
color : 'silver',
model : 'iphone 8'


}
//for loop object
for(const shop in mobile ){

    console.log(shop)

    console.log(mobile[shop])

}
//loop object
const keys =  Object.keys(mobile)
console.log(keys)

for( const key of keys){

    console.log(key, ':',mobile[key])

}

