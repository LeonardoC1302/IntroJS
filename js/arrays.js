// Arrays
const numbers = [10, 20, 30];
console.log(numbers); // [10, 20, 30]

const months = new Array('January', 'February', 'March');
console.log(months); // ["January", "February", "March"]

const mixed = ['Hello', 20, true, null, undefined];
console.log(mixed); // ["Hello", 20, true, null, undefined]

// Access values in an array
console.log(months[0]); // January

// Get the length of an array
console.log(months.length); // 3

numbers.forEach(function(number) {
    console.log(number);
});

// Array Methods
numbers[3] = 60;
numbers.push(70); // Add to the end
numbers.unshift(0); // Add to the beginning
numbers.pop(); // Remove from the end
numbers.shift(); // Remove from the beginning
numbers.splice(1, 1); // Remove from a certain position (index, how many)

const newArray = [...numbers, 80]; // Copy an array and add a new value

// Object Array
const shoppingCart = [
    { id: 1, product: 'Book', price: 200 },
    { id: 2, product: 'Shirt', price: 700 },
    { id: 3, product: 'Album', price: 500 },
];

months.forEach(function(month) {
    if(month === 'March') {
        console.log('March exists');
    }
});

const result = months.includes('March');
result = shoppingCart.some(function(product) {
    return product.product === 'Book';
});

// Reduce
result = shoppingCart.reduce(function(total, product) {
    return total + product.price;
}, 0); // Initial value

result = shoppingCart.reduce((total, product) => total + product.price, 0); // Arrow function

// Filter
result = shoppingCart.filter(function(product) {
    return product.price > 400;
});