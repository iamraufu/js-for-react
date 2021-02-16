const numbers = [23, 89];
const x = numbers[0]
const y = numbers[1]
console.log(x, y)

//  array destructuring
const [p, q] = [10, 20]
console.log(p, q)

function boxify(n1) {
    return [n1, n1 + 5]
}
const boxed = boxify(7)
console.log(boxed)

const [b1, b2] = boxify(7)
console.log(b1, b2)

// object destructuring
const person = { name: 'raufu', age: 21 }
console.log(person.name, person.age)

const { name, age } = { id: 1, salary: 6000, name: 'raufu', age: 21 }
console.log(name, age)

const { money } = person
console.log(money)

// create object shortcut
const a = 25
const b = 15
const obj = { x: a, y: b }
const obj2 = { p, q }
console.log(obj)
console.log(obj2)

// three dots -> new array create
const newNumbers = [...numbers, 41]
console.log(newNumbers)

console.log(numbers.push(23, 90))