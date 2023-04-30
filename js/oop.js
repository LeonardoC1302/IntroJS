// OOP
// Object Constructor
function Product(name, price, color){
    this.name = name;
    this.price = price;
    this.color = color;
}
const productObject = new Product('20-inch Monitor', 300, 'black');
const productObject2 = new Product('Laptop', 1000, 'white');

// Object Literal (Hard Coded)
const product = {
    name: '20-inch Monitor',
    price: 300,
}

// Prototype
Product.prototype.formatProduct(product) = function(){
    return `The product ${this.name} has a price of $${this.price}`;
}
console.log(productObject.formatProduct()); // Using the prototype