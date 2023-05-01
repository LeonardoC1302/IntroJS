function getWorkers() {
    const file = 'workers.json';
    fetch(file)
        .then(result => result.json()) // The result will be a json
        .then(data => {
            const { workers } = data; // Destructuring
            workers.forEach(worker => {
                console.log(worker.id);
                console.log(worker.name);
                console.log(worker.job);
            })
        }) // The result will be the data of the json
}
getWorkers();

// Using async / await
async function getWorkers2() {
    const file = 'workers.json';
    const result = await fetch(file);
    const data = await result.json();
    console.log(result);

}