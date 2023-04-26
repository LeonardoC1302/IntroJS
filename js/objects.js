// Objects
const product = {
    productName: 'PC Monitor',
    productPrice: 119.99,
    productAvailable: true
}

console.log(product); // {productName: "PC Monitor", productPrice: 119.99, productAvailable: true}
console.log(product.productName); // PC Monitor
console.log(product.productPrice); // 119.99
console.log(product.productAvailable); // true

console.log(product['productName']); // PC Monitor

// Add new properties
product.image = 'image.jpg';

// Delete properties
delete product.productAvailable;

// Variables from objects
const productPrice = product.productPrice;

// Destructuring
const {productName} = product; // extract values from object properties and assign them to variables

// Object Methods
Object.freeze(product); // prevent object from being modified
console.log(Object.isFrozen(product)); // true

Object.seal(product); // prevent object from being modified, but allow existing properties to be changed
console.log(Object.isSealed(product)); // true

// Join Objects
const product2 = {
    productName: 'Jeans',
    productPrice: 49.99,
    productAvailable: true
}

const measures = {
    weight: '1kg',
    size: 'L',
}

const newProduct = {...product2, ...measures}; // {productName: "Jeans", productPrice: 49.99, productAvailable: true, weight: "1kg", size: "L"}