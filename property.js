const person = {
 name: 'asik',
  age : 20,
gender:'M',
salary:2000,
married: true,
'space value': ['khai','ghumai','jai']

} 





//multipule value
// console.log(person)

//single value
// dot notation
// console.log(person.salary);

//vabiable call kore output value
const income = person.name;
console.log(income)


console.log(person['space value'])

//value add 
person.salary = 5000,
person ['age'] = 11,
person ['space value'] = ['jabo na','khabo na' , 'ghumai na']

console.log(person)