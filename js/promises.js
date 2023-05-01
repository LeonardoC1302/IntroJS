// Promises
const verifiedUser = new Promise( (resolve, reject) => {
    const auth = true;
    if(auth){
        resolve('User verified'); // The promise is fulfilled
    } else {
        reject('User not verified'); // The promise is rejected
    }
})

// There are 3 values on the promises:
// Pending: The promise is pending (not fulfilled or rejected)
// Fulfilled: The promise is fulfilled
// Rejected: The promise is rejected

verifiedUser
    .then((result) => console.log(result)) // The value of the promise is printed
    .catch((error) => console.log(error)) // The error of the promise is printed