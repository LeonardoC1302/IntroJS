// Declare functions
function printNumber(){
    console.log(100);
}

// IIFE
(function() {
    console.log('IIFE Function');
})();

function addNumbers(num1=0, num2=0) {
    console.log(num1 + num2);
}

// Return a value
function addNumbers(num1=0, num2=0) {
    return num1 + num2;
}

const result = addNumbers(10, 20);

let total = 0;
function addToCart(price){
    return total += price;
}

function calcuateTax(total){
    return total * 1.15;
}
total = addToCart(200);