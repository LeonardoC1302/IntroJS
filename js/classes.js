// Classes
class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    formatProduct(){
        return `The product ${this.name} has a price of $${this.price}`;
    }
    getName(){
        return this.name;
    }
    getPrice(){
        return this.price;
    }
    setName(name){
        this.name = name;
    }
    setPrice(price){
        this.price = price;
    }
}
const product1 = new Product('20-inch Monitor', 300);
console.log(product1.formatProduct());

// Inheritance
class Book extends Product{
    constructor(name, price, isbn){
        super(name, price);
        this.isbn = isbn;
    }
    formatProduct(){
        return `${super.formatProduct()} and its ISBN is ${this.isbn}`;
    }
}
const book1 = new Book('JavaScript for Dummies', 100, '123456789');
console.log(book1.formatProduct());