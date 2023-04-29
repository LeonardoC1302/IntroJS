// For loops
for(let i=0; i<10; i++){
    if(i%2 == 0){
        console.log(`The number ${i} is even`);
    }else{
        console.log(`The number ${i} is odd`);
    }
}

// While loops
let j = 0;
while(j<10){
    if(j%2 == 0){
        console.log(`The number ${j} is even`);
    } else {
        console.log(`The number ${j} is odd`);
    }
    j++;
}

// Do while loops
let k = 0;
do {
    console.log(`Number ${k}`);
    k++;
} while(k<10);

// ForEach loops (iterate over arrays)
const shoppingCart = [
    {id: 1, product: 'Book'},
    {id: 2, product: 'Shirt'},
    {id: 3, product: 'Album'},
    {id: 4, product: 'Pen'}
];

shoppingCart.forEach(function(product){
    console.log(`The product is ${product.product}`);
});

shoppingCart.forEach(product => console.log(`The product is ${product.product}`)); // Arrow function

// Map loops (iterate over arrays and return a new array)
shoppingCart.map(product => console.log(`The product is ${product.product}`)); // Arrow function