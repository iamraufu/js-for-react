const money = 3000;
let food;
if (money > 100) {
    food = 'biryani'
} else {
    food = 'bhat'
}

// ternari - shortcut for if else
let food = money > 100 ? 'biryani' : 'bhorta'

active = true
if (active === true) {
    cssClass = 'active';
} else {
    cssClass = 'inactive'
}

// ternary
const cssClass = active ? 'active' : 'inactive'

// function call shortcut alternative
active ? displayUser() : hideUser()

// 
active && displayUser()

active || displayUser()

const x = active && 5
const y = active || 3
console.log(x)
console.log(y)

// string to number convert
const number = '89'
console.log(number)
const number = +'89'
console.log(number)

// number to string
const numText = 41 + ''
console.log(numText)

function add(n1, n2 = 5) {
    // n2 = n2 || 5
    return n1 + n2;
}

add(45, 15)