// Strings
const product = "Monitor 20 Pulgadas";
const price = "30 USD";
console.log(product)

// Strings Methods
console.log(product.length); // Length
console.log(product.indexOf('Pulgadas')); // IndexOf
console.log(product.includes('Tablet')); // Includes
console.log(product.slice(0, 10)); // Slice
console.log(product.replace('Pulgadas', '"')); // Replace
console.log(product.split(' ')); // Split
console.log(product.toUpperCase()); // ToUpperCase
console.log(product.toLowerCase()); // ToLowerCase

// Concatenate with variables
const clientName = "George";
console.log(`Client name: ${clientName} - Product: ${product} - Price: ${price}`)