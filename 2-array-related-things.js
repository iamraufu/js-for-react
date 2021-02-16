const numbers = [10, 20, 60, 40];
const respected = ['motiur', 'sattar', 'jobbar'];
const products = [{
        id: 1,
        name: 'laptop',
        price: 100
    },
    {
        id: 2,
        name: 'mobile',
        price: 20
    }, {
        id: 3,
        name: "watch",
        price: 5
    },
    {
        id: 4,
        name: "clock",
        price: 10
    }

];

// Map
const names = products.map(product => product.name)
const prices = products.map(prc => prc.price)
console.log(names)
console.log(prices)

// foreach
products.forEach(product => console.log(product.name))

// filter

const cheaper = products.filter(pd => pd.price < 10)
console.log(cheaper)

// remove an item using filter
const remaining = products.filter(pd => pd.id != 3)
console.log(remaining)

// find
const hasWatch = products.find(pd => pd.name === 'watch')
console.log(hasWatch)