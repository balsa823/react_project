//OBJECT DESTRUCTURING
// console.log('destructuring');
// const person = {
//     name: 'Balsa',
//     age: 21,
//     location: {
//         city: 'Belgrade',
//         temp: 18
//     }
// };
// const { name:firstName  = 'Anonymous', age } = person; //es6-destructuring
// const {city, temp: temperature} = person.location;
// // const name = person.name;
// // const age = person.age;
// console.log(`${firstName} is ${age}`);
// if( city && temperature ){  
//     console.log(`It's ${temperature} in ${city}`);
// }
// const book = {
//     title: 'Ego is th Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };
// const { name:publisherName = 'Self-published'} = book.publisher;
// console.log(publisherName);


//Array destructuring


const address = ['32 Albanian Memories', 'Belgrade', 'Serbia', '11000'];
//const address = [];

const [  , city, state = 'New York'] = address;


console.log(`You are in ${city} ${state}`);