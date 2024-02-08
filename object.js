//primitive
//primary
const age = 21;
const school = 'high school';
const subject = ['bangla','english', 'math']
const price = 20


//object
//non- primitive
let bottle = {
brand : 'appple',
num : '29',
color : 'red',
isClean: true
}


// akta objecct vitor arek ta object 
const collage = {

    name: 'tizul',
    class : 'ten',
    event : ['bijoy mela','fire','chol jai' ,'misti khabi'],
   result  : {
        gpa : 5,
        cgpa :4 ,
        position : 'good'

    }
}


//akta object vitor arekta object 
console.log(collage.result.position)

//update call value
collage.event[1] = 'movie'

// kon value ta call korte chai
console.log(collage.event[2])
// update value
collage.class = 'six'


