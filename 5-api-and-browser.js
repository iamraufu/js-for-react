// JSON
const person = {
    name: 'abdur',
    age: 41,
    salary: 1000000,
    city: 'dhaka'
};

console.log(JSON.stringify(person))
console.log(JSON.parse(JSON.stringify(person)).name)

// API
// fetch('url')
//     .then(res => res.json())
//     .then(data => console.log(data))

// Browser
// local storage
// localStorage.setItem('userId', 123)

const userId = localStorage.getItem('userId')
    // console.log(userId)
localStorage.setItem('person', JSON.stringify(person))
const storedPerson = localStorage.getItem('person')
const parsedPerson = JSON.parse(storedPerson);
console.log(parsedPerson.age)

const keys = Object.keys(parsedPerson);
console.log(keys);

const values = Object.values(parsedPerson)
console.log(values)