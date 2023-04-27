// Arrow Function
const addNumbers = (num1, num2) => num1 + num2; // return is implicit
console.log(addNumbers(1, 2)); // 3

// Object Array
const shoppingCart = [
    { id: 1, product: 'Book', price: 200 },
    { id: 2, product: 'Shirt', price: 700 },
    { id: 3, product: 'Album', price: 500 },
];
let result = shoppingCart.some( producto => producto.product === 'Book' );