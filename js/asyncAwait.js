// Async / Await
function downloadNewClients(){
    return new Promise(resolve => {
        console.log('Downloading new clients... Please wait...');

        setTimeout(() => {
            resolve('The list of clients has been downloaded');
        }, 5000);
    })
}

function dowloadLastOrders(){
    return new Promise(resolve => {
        console.log('Downloading last orders... Please wait...');

        setTimeout(() => {
            resolve('The list of orders has been downloaded');
        }, 3000);
    })
}

async function app() { // async function always returns a promise
    try{
        // const clients = await downloadNewClients();
        // const orders = await dowloadLastOrders();
        // console.log(clients);
        // console.log(orders);
        const result = Promise.all([downloadNewClients(), dowloadLastOrders()]); // Promise.all() executes all promises at the same time
        console.log(result); // Promise.all() returns an array with the results of all promises
    } catch(error){
        console.log(error);
    }
}
app();
// Code after this will be executed before the promise is resolved
